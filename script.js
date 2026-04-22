const baseElements = [
  'Human',
  'Water',
  'Land',
  'Fire',
  'Food',
  'Shelter',
  'Tool',
  'Animal',
  'Time',
  'Movement'
];

function sortedKey(a, b) {
  return a < b ? `${a}+${b}` : `${b}+${a}`;
}

const combinationRules = {
  'Human+Food': 'Survival',
  'Human+Shelter': 'Settlement',
  'Tool+Land': 'Farming',
  'Animal+Human': 'Domestication',
  'Farming+Settlement': 'Village',
  'Settlement+Human': 'Society',
  'Society+Time': 'Law',
  'Society+Law': 'Government',
  'Shelter+Fire': 'Culture',
  'Human+Time': 'Writing',
  'Culture+Writing': 'Civilization',
  'Tool+Movement': 'Trade',
  'Trade+Movement': 'Commerce',
  'Farming+Tool': 'Industry',
  'Tool+Fire': 'Technology',
  'Government+People': 'Democracy',
  'Industry+Technology': 'Industrialization',
  'Civilization+People': 'Revolution',
  'Revolution+Government': 'New Nation',
  'Human+Movement': 'People'
};

const normalizedRules = {};
Object.entries(combinationRules).forEach(([pair, result]) => {
  const [left, right] = pair.split('+');
  normalizedRules[sortedKey(left, right)] = result;
});

const tierMap = {
  1: ['Human', 'Water', 'Land', 'Fire', 'Food', 'Shelter', 'Tool', 'Animal', 'Time', 'Movement'],
  2: ['Survival', 'Settlement', 'Farming', 'Domestication', 'People'],
  3: ['Village', 'Society', 'Law', 'Culture', 'Writing', 'Trade', 'Commerce'],
  4: ['Government', 'Civilization', 'Industry', 'Technology', 'Democracy'],
  5: ['Industrialization', 'Revolution', 'New Nation']
};

const discovered = new Set(baseElements);
const elementsList = document.getElementById('elements-list');
const workspace = document.getElementById('workspace');
const resultMessage = document.getElementById('result-message');
const discoveryCount = document.getElementById('discovery-count');
const totalCount = document.getElementById('total-count');

let draggedElementName = null;
let activeWorkspaceDrag = null;
let dragOffset = { x: 0, y: 0 };

// Debug log
console.log('Initialization:', {
  elementsList: elementsList,
  workspace: workspace,
  discovered: Array.from(discovered)
});

function getTier(element) {
  for (let tier = 1; tier <= 5; tier++) {
    if (tierMap[tier].includes(element)) return tier;
  }
  return 1;
}

function getRandomPosition() {
  const maxX = workspace.offsetWidth - 120;
  const maxY = workspace.offsetHeight - 40;
  return {
    x: Math.random() * Math.max(maxX, 50) + 10,
    y: Math.random() * Math.max(maxY, 50) + 10
  };
}

function createWorkspaceElement(name) {
  const div = document.createElement('div');
  div.className = `element tier-${getTier(name)}`;
  div.textContent = name;
  div.dataset.element = name;
  div.style.touchAction = 'none';
  
  const pos = getRandomPosition();
  div.style.left = `${pos.x}px`;
  div.style.top = `${pos.y}px`;
  
  div.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    activeWorkspaceDrag = div;
    dragOffset.x = e.clientX - div.offsetLeft;
    dragOffset.y = e.clientY - div.offsetTop;
    div.classList.add('dragging');
    div.setPointerCapture(e.pointerId);
  });
  
  div.addEventListener('pointerup', (e) => {
    if (activeWorkspaceDrag === div) {
      div.releasePointerCapture(e.pointerId);
      div.classList.remove('dragging');
      activeWorkspaceDrag = null;
      checkForCombinationWithMoved(div);
    }
  });
  
  div.addEventListener('pointercancel', () => {
    if (activeWorkspaceDrag === div) {
      div.classList.remove('dragging');
      activeWorkspaceDrag = null;
    }
  });
  
  return div;
}

function createSidebarElement(name) {
  const button = document.createElement('button');
  button.className = `sidebar-element tier-${getTier(name)}`;
  button.textContent = name;
  button.draggable = true;
  button.dataset.element = name;
  
  button.addEventListener('dragstart', (e) => {
    draggedElementName = name;
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', name);
  });
  
  button.addEventListener('dragend', () => {
    draggedElementName = null;
  });
  
  return button;
}

function refreshSidebar() {
  elementsList.innerHTML = '';
  const discoveredArray = Array.from(discovered).sort();
  discoveredArray.forEach(element => {
    elementsList.appendChild(createSidebarElement(element));
  });
}

function showMessage(text, type = 'info') {
  resultMessage.textContent = text;
  resultMessage.className = `show ${type}`;
  setTimeout(() => {
    resultMessage.classList.remove('show');
  }, 3000);
}

function updateStats() {
  discoveryCount.textContent = discovered.size;
  totalCount.textContent = Object.keys(normalizedRules).length + baseElements.length;
}

function addElementToWorkspace(name) {
  const node = createWorkspaceElement(name);
  workspace.appendChild(node);
  
  // Highlight placeholder hiding when workspace has elements
  if (workspace.querySelector('.placeholder')) {
    workspace.querySelector('.placeholder').style.display = 'none';
  }
}

function rectsOverlap(rect1, rect2) {
  return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

function checkForCombinationWithMoved(movedEl) {
  const allElements = Array.from(workspace.querySelectorAll('.element')).filter(el => el !== movedEl);
  const movedRect = movedEl.getBoundingClientRect();
  
  for (const el of allElements) {
    const targetRect = el.getBoundingClientRect();
    if (!rectsOverlap(movedRect, targetRect)) continue;
    
    const element1 = movedEl.dataset.element;
    const element2 = el.dataset.element;
    const key = sortedKey(element1, element2);
    const result = normalizedRules[key];
    
    if (result && !discovered.has(result)) {
      const x = parseFloat(movedEl.style.left);
      const y = parseFloat(movedEl.style.top);
      discovered.add(result);
      refreshSidebar();
      updateStats();
      movedEl.remove();
      el.remove();
      const resultNode = createWorkspaceElement(result);
      resultNode.style.left = `${Math.max(0, Math.min(x, workspace.offsetWidth - 100))}px`;
      resultNode.style.top = `${Math.max(0, Math.min(y, workspace.offsetHeight - 40))}px`;
      workspace.appendChild(resultNode);
      showMessage(`✨ New discovery: ${result}!`, 'success');
      return;
    }
    if (result && discovered.has(result)) {
      showMessage(`${result} already discovered!`, 'info');
    }
    return;
  }
}

// Workspace drag events
workspace.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  workspace.classList.add('active');
});

workspace.addEventListener('dragleave', (e) => {
  if (e.target === workspace) {
    workspace.classList.remove('active');
  }
});

workspace.addEventListener('drop', (e) => {
  e.preventDefault();
  e.stopPropagation();
  workspace.classList.remove('active');
  
  const rect = workspace.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  if (draggedElementName) {
    const node = createWorkspaceElement(draggedElementName);
    node.style.left = `${Math.max(0, Math.min(x - 40, workspace.offsetWidth - 100))}px`;
    node.style.top = `${Math.max(0, Math.min(y - 25, workspace.offsetHeight - 40))}px`;
    workspace.appendChild(node);
    draggedElementName = null;
    
    const placeholder = workspace.querySelector('.placeholder');
    if (placeholder) {
      placeholder.style.display = 'none';
    }
    
    setTimeout(() => {
      checkForCombinationWithMoved(node);
    }, 50);
  }
});

document.addEventListener('pointermove', (e) => {
  if (!activeWorkspaceDrag) return;
  const rect = workspace.getBoundingClientRect();
  const x = e.clientX - rect.left - dragOffset.x;
  const y = e.clientY - rect.top - dragOffset.y;
  activeWorkspaceDrag.style.left = `${Math.max(0, Math.min(x, workspace.offsetWidth - activeWorkspaceDrag.offsetWidth))}px`;
  activeWorkspaceDrag.style.top = `${Math.max(0, Math.min(y, workspace.offsetHeight - activeWorkspaceDrag.offsetHeight))}px`;
});

function checkForCombinations() {
  // No global combination checks to avoid showing errors when simply moving elements.
}

// Initialize
console.log('Before refreshSidebar, discovered:', Array.from(discovered));
refreshSidebar();
console.log('After refreshSidebar, sidebar has', elementsList.children.length, 'children');
updateStats();
console.log('Stats updated');
