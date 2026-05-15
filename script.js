const elementsData = {
  Human: { icon: '👤', title: 'Human', description: 'The beginning of all history and discovery.', fact: 'Humans are the foundation of every achievement.' },
  Water: { icon: '💧', title: 'Water', description: 'Essential for crops, travel, and sustaining life.', fact: 'Water carved empires and connected civilizations.' },
  Land: { icon: '🌄', title: 'Land', description: 'Territory, terrain, and the basis of all settlements.', fact: 'Land defines where kingdoms rise and fall.' },
  Fire: { icon: '🔥', title: 'Fire', description: 'A transformative force of creation and destruction.', fact: 'Fire turned survival into civilization.' },
  Food: { icon: '🥖', title: 'Food', description: 'Crops and provisions that sustain armies and empires.', fact: 'Food supply is the foundation of all power.' },
  Shelter: { icon: '⛺', title: 'Shelter', description: 'Protection and the beginning of permanent settlements.', fact: 'Shelter protects people and preserves knowledge.' },
  Tool: { icon: '🛠️', title: 'Tool', description: 'Instruments that shape the world and expand capability.', fact: 'Tools turned ideas into lasting achievements.' },
  Animal: { icon: '🐎', title: 'Animal', description: 'Beasts of burden and instruments of power.', fact: 'Animals carried empires across vast distances.' },
  Time: { icon: '⏱️', title: 'Time', description: 'The progression of ages and accumulated knowledge.', fact: 'Time reveals what endures and what crumbles.' },
  Movement: { icon: '🏹', title: 'Movement', description: 'Travel, trade routes, and the spread of culture.', fact: 'Movement connects distant lands and peoples.' },
  Farming: { icon: '🌾', title: 'Farming', description: 'Agricultural production that sustains civilizations.', fact: 'Farming freed humans from nomadic existence.' },
  Settlement: { icon: '🏘️', title: 'Settlement', description: 'Permanent communities where cultures take root.', fact: 'Settlements are seeds of great cities.' },
  Domestication: { icon: '🐄', title: 'Domestication', description: 'Taming animals for labor, food, and transport.', fact: 'Domestication multiplied human capability.' },
  Society: { icon: '🪑', title: 'Society', description: 'Organized social structures and shared rules.', fact: 'Society is built on cooperation and trust.' },
  Law: { icon: '📜', title: 'Law', description: 'Rules and codes that govern civilization.', fact: 'Law defines justice and social order.' },
  Government: { icon: '🏛️', title: 'Government', description: 'Leadership systems managing people and resources.', fact: 'Government structures society and ambition.' },
  Writing: { icon: '✍️', title: 'Writing', description: 'The recording and transmission of knowledge.', fact: 'Writing preserves wisdom across generations.' },
  Culture: { icon: '🎭', title: 'Culture', description: 'Art, belief, and ceremony of a people.', fact: 'Culture is what makes a civilization enduring.' },
  Civilization: { icon: '🏛️', title: 'Civilization', description: 'A complex society organized by law and culture.', fact: 'Civilizations are humanity\'s greatest achievement.' },
  People: { icon: '🧑‍🤝‍🧑', title: 'People', description: 'Communities that form the heart of nations.', fact: 'People are the true strength of any civilization.' },
  Force: { icon: '⚡', title: 'Force', description: 'Military might and the power to shape conflict.', fact: 'Force enforces the will of empires.' },
  Defense: { icon: '🛡️', title: 'Defense', description: 'Protection, strategy, and resilience against threats.', fact: 'Defense preserves what civilizations build.' },
  War: { icon: '⚔️', title: 'War', description: 'Conflict between nations and ideologies.', fact: 'War determines which empires endure.' },
  Explosion: { icon: '💥', title: 'Explosion', description: 'Destructive force that changed warfare.', fact: 'Explosions revolutionized military tactics.' },
  Trade: { icon: '🛒', title: 'Trade', description: 'Exchange of goods connecting distant lands.', fact: 'Trade is the circulation of civilization.' },
  Commerce: { icon: '💰', title: 'Commerce', description: 'Markets and economic systems of empires.', fact: 'Commerce powers the growth of nations.' },
  Technology: { icon: '⚙️', title: 'Technology', description: 'Innovations that advance civilization.', fact: 'Technology multiplies human capability.' },
  Industry: { icon: '🏭', title: 'Industry', description: 'Mass production and manufacturing systems.', fact: 'Industry transformed the modern world.' },
  Democracy: { icon: '🗳️', title: 'Democracy', description: 'Governance by and for the people.', fact: 'Democracy emerged as power spread beyond rulers.' },
  Revolution: { icon: '🏴', title: 'Revolution', description: 'Radical change in social and political order.', fact: 'Revolutions reshape the course of history.' },
  NewNation: { icon: '🪙', title: 'New Nation', description: 'A state born from revolution and ideals.', fact: 'New nations carry the hopes of their people.' },
  Iron: { icon: '⛓️', title: 'Iron', description: 'Strong metal forged into tools and weapons.', fact: 'Iron Age marked a leap in civilization.' },
  Gunpowder: { icon: '💣', title: 'Gunpowder', description: 'Explosive invention changing warfare forever.', fact: 'Gunpowder ended medieval domination.' },
  Soldier: { icon: '🪖', title: 'Soldier', description: 'Trained warriors serving empires and nations.', fact: 'Soldiers are history\'s most decisive force.' },
  Cavalry: { icon: '🐎', title: 'Cavalry', description: 'Mounted warriors of devastating speed.', fact: 'Cavalry dominated battlefields for millennia.' },
  Shield: { icon: '🛡️', title: 'Shield', description: 'Defensive equipment protecting warriors.', fact: 'Shields represent both defense and honor.' },
  Fortress: { icon: '🏰', title: 'Fortress', description: 'Strategic strongholds anchoring empires.', fact: 'Fortresses were the anchors of power.' },
  Railroad: { icon: '🚂', title: 'Railroad', description: 'Iron rails linking distant territories.', fact: 'Railroads unified nations and empires.' },
  Empire: { icon: '🏛️', title: 'Empire', description: 'A vast realm of conquered territories.', fact: 'Empires are history\'s grandest stage.' },
  Constitution: { icon: '📜', title: 'Constitution', description: 'A charter defining rights and governance.', fact: 'Constitutions legalize the social contract.' },
  Aviation: { icon: '✈️', title: 'Aviation', description: 'The era of flight and aerial warfare.', fact: 'Aviation transformed warfare and society.' },
  Navy: { icon: '🚢', title: 'Navy', description: 'Naval forces controlling seas and commerce.', fact: 'Naval power determined imperial dominance.' },
  Exploration: { icon: '🧭', title: 'Exploration', description: 'Discovery of new lands and routes.', fact: 'Exploration expanded the known world.' },
  Economy: { icon: '🪙', title: 'Economy', description: 'Financial systems of nations and empires.', fact: 'Economy is the lifeblood of civilization.' },
  Weapon: { icon: '⚔️', title: 'Weapon', description: 'Arms designed for combat and conquest.', fact: 'Weapons decide the fate of empires.' },
  Cannon: { icon: '🔭', title: 'Cannon', description: 'Heavy artillery breaking fortifications.', fact: 'Cannons ended castle dominance.' },
  Battle: { icon: '⚔️', title: 'Battle', description: 'Decisive clash determining history\'s course.', fact: 'Battles reshape the map of nations.' },
  Siege: { icon: '🏹', title: 'Siege', description: 'Strategic encirclement of fortifications.', fact: 'Sieges tested the will of civilizations.' },
  Discovery: { icon: '🧭', title: 'Discovery', description: 'Unveiling new lands, routes, and knowledge.', fact: 'Discovery expands what is known to humanity.' },
  Republic: { icon: '🪙', title: 'Republic', description: 'A nation governed by law and representation.', fact: 'Republics balance freedom and order.' },
  Locomotive: { icon: '🚂', title: 'Locomotive', description: 'Steam engines driving industrial progress.', fact: 'Locomotives connected nations and resources.' },
  Forge: { icon: '⚒️', title: 'Forge', description: 'Furnaces where tools and weapons are made.', fact: 'The forge is where civilization is forged.' },
  Irrigation: { icon: '💧', title: 'Irrigation', description: 'Water systems sustaining vast farmlands.', fact: 'Irrigation allowed empires to flourish.' },
  Market: { icon: '🏬', title: 'Market', description: 'Centers of trade and economic activity.', fact: 'Markets are where civilizations connect.' },
  Egypt: { icon: '🏺', title: 'Egypt', description: 'Ancient civilization of the Nile and pharaohs.', fact: 'Egypt lasted over 3000 years of recorded history.' },
  Pharaoh: { icon: '👑', title: 'Pharaoh', description: 'Divine ruler commanding empires and gods.', fact: 'Pharaohs were seen as bridges between worlds.' },
  Pyramid: { icon: '🔺', title: 'Pyramid', description: 'Monumental tombs of pharaohs and kings.', fact: 'Pyramids are humanity\'s most enduring monuments.' },
  Nile: { icon: '🌊', title: 'Nile', description: 'River that made Egypt\'s civilization possible.', fact: 'The Nile\'s flooding created agricultural abundance.' },
  Papyrus: { icon: '📄', title: 'Papyrus', description: 'Early paper enabling recorded communication.', fact: 'Papyrus let Egypt preserve knowledge.' },
  Hieroglyphics: { icon: '🔤', title: 'Hieroglyphics', description: 'Ancient Egyptian writing system of images.', fact: 'Hieroglyphics combined art with language.' },
  Greece: { icon: '🏛️', title: 'Greece', description: 'Ancient civilization of philosophy and democracy.', fact: 'Greece gave birth to Western thought.' },
  Philosopher: { icon: '🤔', title: 'Philosopher', description: 'Thinkers seeking truth and understanding.', fact: 'Philosophers shaped human thought.' },
  Olympics: { icon: '🏅', title: 'Olympics', description: 'Athletic contests celebrating excellence.', fact: 'Olympics united Greece in peaceful competition.' },
  Rome: { icon: '🦅', title: 'Rome', description: 'Great empire of legions and law.', fact: 'Rome created a legal system still used today.' },
  Caesar: { icon: '🗡️', title: 'Caesar', description: 'Powerful Roman general and ruler.', fact: 'Caesar\'s name became a title for emperors.' },
  Aqueduct: { icon: '🏗️', title: 'Aqueduct', description: 'Engineered systems bringing water to cities.', fact: 'Aqueducts were marvels of Roman engineering.' },
  Colosseum: { icon: '⚔️', title: 'Colosseum', description: 'Massive amphitheater of spectacle and power.', fact: 'The Colosseum held 50,000 spectators.' },
  Latin: { icon: '📜', title: 'Latin', description: 'Language of Rome spreading across empires.', fact: 'Latin influenced all Romance languages.' },
  Mesopotamia: { icon: '🏺', title: 'Mesopotamia', description: 'Cradle of civilization between two rivers.', fact: 'Mesopotamia saw the first cities and writing.' },
  Knight: { icon: '⚔️', title: 'Knight', description: 'Armored warriors of medieval honor codes.', fact: 'Knights were the elite of medieval warfare.' },
  Feudalism: { icon: '🏰', title: 'Feudalism', description: 'Medieval system of lords and vassals.', fact: 'Feudalism organized medieval society.' },
  Castle: { icon: '🏰', title: 'Castle', description: 'Fortified medieval strongholds.', fact: 'Castles dominated medieval landscapes.' },
  Chivalry: { icon: '⚔️', title: 'Chivalry', description: 'Code of honor and conduct for knights.', fact: 'Chivalry idealized knightly virtue.' },
  Lord: { icon: '👑', title: 'Lord', description: 'Noble ruler of lands and subjects.', fact: 'Lords held power over their domains.' },
  Vassal: { icon: '🙇', title: 'Vassal', description: 'Noble sworn to serve a greater lord.', fact: 'Vassals formed feudalism\'s hierarchy.' },
  Monastery: { icon: '⛪', title: 'Monastery', description: 'Communities of monks preserving knowledge.', fact: 'Monasteries preserved learning through dark ages.' },
  Abbey: { icon: '⛪', title: 'Abbey', description: 'Religious communities under abbots and abbesses.', fact: 'Abbeys were centers of medieval learning.' },
  Plague: { icon: '💀', title: 'Plague', description: 'Disease that decimated medieval populations.', fact: 'The Black Death killed millions.' },
  Crusade: { icon: '✝️', title: 'Crusade', description: 'Religious wars for holy lands.', fact: 'Crusades shaped medieval and Islamic history.' },
  Bishop: { icon: '⛪', title: 'Bishop', description: 'Religious leader of the church hierarchy.', fact: 'Bishops wielded both spiritual and political power.' },
  Tapestry: { icon: '🎨', title: 'Tapestry', description: 'Woven artworks depicting history and tales.', fact: 'Tapestries recorded medieval events in art.' },
  Joust: { icon: '🐎', title: 'Joust', description: 'Ritual combat between armored knights.', fact: 'Jousts were the spectacles of medieval courts.' },
  Heraldry: { icon: '🛡️', title: 'Heraldry', description: 'System of symbolic coats of arms.', fact: 'Heraldry identified noble lineages.' },
  Seal: { icon: '📛', title: 'Seal', description: 'Official mark authenticating documents.', fact: 'Seals ensured the legitimacy of medieval documents.' },
  Art: { icon: '🎨', title: 'Art', description: 'Creative expression of human vision.', fact: 'Art reveals the soul of civilizations.' },
  Science: { icon: '🔬', title: 'Science', description: 'Systematic study of nature and universe.', fact: 'Science freed humanity from superstition.' },
  Leonardo: { icon: '🎨', title: 'Leonardo', description: 'Renaissance polymath of genius.', fact: 'Leonardo embodied Renaissance ideals.' },
  Sculpture: { icon: '🗿', title: 'Sculpture', description: 'Three-dimensional artistic creations.', fact: 'Sculpture brought stone to life.' },
  Painting: { icon: '🎨', title: 'Painting', description: 'Two-dimensional artistic expression.', fact: 'Painting captured human emotion and beauty.' },
  Perspective: { icon: '📐', title: 'Perspective', description: 'Technique creating depth in visual art.', fact: 'Perspective revolutionized artistic realism.' },
  Humanism: { icon: '📚', title: 'Humanism', description: 'Philosophy emphasizing human potential.', fact: 'Humanism centered humanity in thought.' },
  PrintingPress: { icon: '🖨️', title: 'Printing Press', description: 'Technology enabling mass production of books.', fact: 'The printing press democratized knowledge.' },
  Gutenberg: { icon: '📖', title: 'Gutenberg', description: 'Inventor of movable type printing.', fact: 'Gutenberg\'s press transformed civilization.' },
  Columbus: { icon: '⛵', title: 'Columbus', description: 'Explorer who sailed to the New World.', fact: 'Columbus changed the course of world history.' },
  Navigator: { icon: '🧭', title: 'Navigator', description: 'Expert guide charting unknown waters.', fact: 'Navigators mapped the world\'s oceans.' },
  Compass: { icon: '🧭', title: 'Compass', description: 'Instrument enabling precise navigation.', fact: 'The compass made ocean exploration possible.' },
  Telescope: { icon: '🔭', title: 'Telescope', description: 'Device revealing distant stars and planets.', fact: 'The telescope expanded human perspective.' },
  Cartography: { icon: '🗺️', title: 'Cartography', description: 'Art of mapmaking and geographic knowledge.', fact: 'Cartography mapped the known world.' },
  Map: { icon: '🗺️', title: 'Map', description: 'Visual representation of territories and routes.', fact: 'Maps enabled exploration and conquest.' },
  Merchant: { icon: '🛒', title: 'Merchant', description: 'Trader conducting commerce across lands.', fact: 'Merchants connected distant civilizations.' },
  SpiceTrade: { icon: '🌶️', title: 'Spice Trade', description: 'Commerce in valuable Eastern spices.', fact: 'Spice trade routes shaped empires.' },
  Ship: { icon: '⛵', title: 'Ship', description: 'Vessel enabling ocean-going exploration.', fact: 'Ships connected continents and empires.' },
  Galleon: { icon: '⛵', title: 'Galleon', description: 'Large sailing ship of European expansion.', fact: 'Galleons were the warships of empires.' },
  Colony: { icon: '🏘️', title: 'Colony', description: 'Settlement established by distant empire.', fact: 'Colonies extended imperial power across oceans.' },
  Caribbean: { icon: '🏝️', title: 'Caribbean', description: 'Tropical region colonized by Europeans.', fact: 'The Caribbean became a focal point of empires.' },
  Philosophy: { icon: '💭', title: 'Philosophy', description: 'Systematic study of fundamental truths.', fact: 'Philosophy questions the nature of existence.' },
  Reason: { icon: '🧠', title: 'Reason', description: 'Logical thought and rational inquiry.', fact: 'Reason separated science from superstition.' },
  Scientist: { icon: '🔬', title: 'Scientist', description: 'Investigator of natural phenomena.', fact: 'Scientists revealed the universe\'s mechanics.' },
  Newton: { icon: '🍎', title: 'Newton', description: 'Revolutionary physicist of gravity and motion.', fact: 'Newton\'s laws governed physics for centuries.' },
  Experiment: { icon: '🔬', title: 'Experiment', description: 'Controlled test proving scientific theories.', fact: 'Experiments replaced superstition with truth.' },
  Theory: { icon: '📐', title: 'Theory', description: 'Systematic explanation of natural phenomena.', fact: 'Theories organize scientific knowledge.' },
  Academy: { icon: '🏫', title: 'Academy', description: 'Institution for advanced learning.', fact: 'Academies preserved and advanced knowledge.' },
  Factory: { icon: '🏭', title: 'Factory', description: 'Industrial facility for mass production.', fact: 'Factories revolutionized manufacturing.' },
  Steam: { icon: '💨', title: 'Steam', description: 'Power source driving industrial engines.', fact: 'Steam power transformed civilization.' },
  Coal: { icon: '⚫', title: 'Coal', description: 'Fossil fuel powering industrial machines.', fact: 'Coal fed the furnaces of industry.' },
  Mill: { icon: '🏭', title: 'Mill', description: 'Facility grinding grain or processing materials.', fact: 'Mills mechanized agricultural work.' },
  Worker: { icon: '👷', title: 'Worker', description: 'Labor force of industrial civilization.', fact: 'Workers built the modern world.' },
  Textile: { icon: '🧵', title: 'Textile', description: 'Fabric industries revolutionized by machines.', fact: 'Textile mills were the first industries.' },
  Gear: { icon: '⚙️', title: 'Gear', description: 'Mechanical parts transferring rotational force.', fact: 'Gears are the foundation of machinery.' },
  Engine: { icon: '⚙️', title: 'Engine', description: 'Device converting energy into mechanical work.', fact: 'Engines powered the industrial revolution.' },
  Electricity: { icon: '⚡', title: 'Electricity', description: 'Harnessed energy transforming civilization.', fact: 'Electricity powered the modern world.' },
  Telegraph: { icon: '📡', title: 'Telegraph', description: 'Technology enabling instant long-distance communication.', fact: 'Telegraph connected distant civilizations.' },
  Valve: { icon: '🔧', title: 'Valve', description: 'Device controlling flow of liquids or gases.', fact: 'Valves regulated industrial processes.' },
  Turbine: { icon: '⚙️', title: 'Turbine', description: 'Machine converting fluid flow into motion.', fact: 'Turbines generated power for nations.' },
  Bow: { icon: '🏹', title: 'Bow', description: 'Ancient ranged weapon of arrows.', fact: 'Bows dominated ancient battlefields.' },
  Arrow: { icon: '🏹', title: 'Arrow', description: 'Projectile weapon of precision and range.', fact: 'Arrows were the first ranged weapons.' },
  Spear: { icon: '🗡️', title: 'Spear', description: 'Pole weapon for thrusting and throwing.', fact: 'Spears were humanity\'s first weapons.' },
  Pike: { icon: '🗡️', title: 'Pike', description: 'Long polearm dominating medieval warfare.', fact: 'Pikes formed impenetrable squares.' },
  Musket: { icon: '🔫', title: 'Musket', description: 'Early gunpowder firearm of foot soldiers.', fact: 'Muskets replaced bows and pikes.' },
  Rifle: { icon: '🔫', title: 'Rifle', description: 'Accurate firearm with spiraling bore.', fact: 'Rifles gave soldiers superior firepower.' },
  Tank: { icon: '🚜', title: 'Tank', description: 'Armored warfare vehicle of modern combat.', fact: 'Tanks dominated 20th-century battlefields.' },
  Warship: { icon: '🚢', title: 'Warship', description: 'Naval vessel armed for combat.', fact: 'Warships determined naval supremacy.' },
  Armor: { icon: '🛡️', title: 'Armor', description: 'Protective gear for warriors.', fact: 'Armor was medieval knights\' pride.' },
  Helmet: { icon: '⛑️', title: 'Helmet', description: 'Protective headgear for warriors.', fact: 'Helmets protected heads in ancient warfare.' },
  Lance: { icon: '🗡️', title: 'Lance', description: 'Mounted knight\'s charging weapon.', fact: 'Lances defined cavalry charges.' },
  Crossbow: { icon: '🏹', title: 'Crossbow', description: 'Powerful mechanical ranged weapon.', fact: 'Crossbows pierced medieval armor.' },
  Music: { icon: '🎵', title: 'Music', description: 'Organized sound expressing emotion.', fact: 'Music is the universal language.' },
  Literature: { icon: '📚', title: 'Literature', description: 'Written stories and poetry of a civilization.', fact: 'Literature immortalizes human experience.' },
  Language: { icon: '💬', title: 'Language', description: 'System of communication and meaning.', fact: 'Language defines cultures and bonds peoples.' },
  Religion: { icon: '⛩️', title: 'Religion', description: 'Spiritual beliefs and practices of peoples.', fact: 'Religion drives human purpose and action.' },
  Priest: { icon: '🙏', title: 'Priest', description: 'Religious leader mediating with the divine.', fact: 'Priests guided souls and shaped societies.' },
  Church: { icon: '⛪', title: 'Church', description: 'Religious institution and gathering place.', fact: 'Churches were centers of medieval power.' },
  Scholar: { icon: '📚', title: 'Scholar', description: 'Learned individual preserving knowledge.', fact: 'Scholars preserved civilization through ages.' },
  Book: { icon: '📖', title: 'Book', description: 'Bound written knowledge and stories.', fact: 'Books are humanity\'s greatest invention.' },
  Library: { icon: '📚', title: 'Library', description: 'Institution preserving recorded knowledge.', fact: 'Libraries are the memory of civilization.' },
  Guild: { icon: '🏛️', title: 'Guild', description: 'Association of craftsmen controlling trade.', fact: 'Guilds organized medieval craftsmanship.' },
  Labor: { icon: '👷', title: 'Labor', description: 'Work and effort building civilization.', fact: 'Labor is the foundation of all progress.' },
  Peasant: { icon: '🌾', title: 'Peasant', description: 'Common people working the land.', fact: 'Peasants were the foundation of feudalism.' },
  Tax: { icon: '💰', title: 'Tax', description: 'Revenue extracted by rulers.', fact: 'Taxes funded empires and armies.' },
  Money: { icon: '💰', title: 'Money', description: 'Medium of exchange and wealth storage.', fact: 'Money enabled complex civilization.' },
  Debt: { icon: '📝', title: 'Debt', description: 'Obligation to repay borrowed resources.', fact: 'Debt financed many historical empires.' },
  Banking: { icon: '🏦', title: 'Banking', description: 'System managing wealth and credit.', fact: 'Banking powered commercial civilization.' },
  Grain: { icon: '🌾', title: 'Grain', description: 'Cereal crops sustaining civilizations.', fact: 'Grain storage enabled cities.' },
  Wheat: { icon: '🌾', title: 'Wheat', description: 'Primary grain crop of ancient world.', fact: 'Wheat fed the cradles of civilization.' },
  CropRotation: { icon: '🔄', title: 'Crop Rotation', description: 'Agricultural technique maintaining soil fertility.', fact: 'Crop rotation sustained medieval farming.' },
  Plow: { icon: '🛠️', title: 'Plow', description: 'Agricultural tool breaking earth for planting.', fact: 'The plow freed humans from starvation.' },
  Bronze: { icon: '🏺', title: 'Bronze', description: 'Alloy of copper and tin.', fact: 'Bronze Age marked civilizational leap.' },
  Copper: { icon: '🪙', title: 'Copper', description: 'Valuable metal for tools and trade.', fact: 'Copper was ancient wealth.' },
  Tin: { icon: '⚪', title: 'Tin', description: 'Metal alloyed with copper for bronze.', fact: 'Tin trade routes connected ancient empires.' },
  Steel: { icon: '⚔️', title: 'Steel', description: 'Hard alloy of iron and carbon.', fact: 'Steel enabled superior weapons.' },
  Oil: { icon: '🛢️', title: 'Oil', description: 'Petroleum resource powering modern age.', fact: 'Oil fueled the 20th century.' },
  Horse: { icon: '🐴', title: 'Horse', description: 'Domesticated steed for riding and war.', fact: 'Horses gave humans speed and power.' },
  Carriage: { icon: '🚗', title: 'Carriage', description: 'Wheeled vehicle for transport.', fact: 'Carriages enabled efficient travel.' },
  Wagon: { icon: '🚗', title: 'Wagon', description: 'Heavy cart for cargo transport.', fact: 'Wagons carried goods and empires.' },
  Bridge: { icon: '🌉', title: 'Bridge', description: 'Structure spanning obstacles for passage.', fact: 'Bridges connected divided lands.' },
  Road: { icon: '🛣️', title: 'Road', description: 'Pathway enabling trade and movement.', fact: 'Roads were arteries of empires.' },
  Canal: { icon: '🌊', title: 'Canal', description: 'Artificial waterway for transport.', fact: 'Canals connected cities and commerce.' },
  Port: { icon: '🚢', title: 'Port', description: 'Harbor facility for maritime trade.', fact: 'Ports were where empires connected.' },
  Dock: { icon: '🏗️', title: 'Dock', description: 'Structure for loading ships and cargo.', fact: 'Docks enabled maritime commerce.' },
  Radio: { icon: '📻', title: 'Radio', description: 'Wireless transmission of information.', fact: 'Radio connected the world without wires.' },
  Television: { icon: '📺', title: 'Television', description: 'Visual broadcast medium of modern age.', fact: 'Television shaped 20th-century culture.' },
  Internet: { icon: '🌐', title: 'Internet', description: 'Global network of connected information.', fact: 'The internet unified humanity\'s knowledge.' },
  Telephone: { icon: '☎️', title: 'Telephone', description: 'Device enabling voice communication.', fact: 'Telephones collapsed distance and time.' },
  Computer: { icon: '💻', title: 'Computer', description: 'Programmable machine processing information.', fact: 'Computers are civilization\'s greatest tool.' },
  Satellite: { icon: '🛰️', title: 'Satellite', description: 'Orbital platform for communication.', fact: 'Satellites linked the world.' },
  Nuclear: { icon: '☢️', title: 'Nuclear', description: 'Atomic energy of tremendous power.', fact: 'Nuclear energy transformed warfare.' },
  Atomic: { icon: '⚛️', title: 'Atomic', description: 'Theory of matter\'s fundamental particles.', fact: 'Atomic theory revealed matter\'s secrets.' },
  Rocket: { icon: '🚀', title: 'Rocket', description: 'Propelled vehicle escaping Earth\'s grasp.', fact: 'Rockets reached for the stars.' },
  Space: { icon: '🌌', title: 'Space', description: 'The vast cosmos beyond Earth.', fact: 'Space exploration expanded human horizons.' },
  Honor: { icon: '🎖️', title: 'Honor', description: 'Principle of reputation and integrity.', fact: 'Honor drove countless historical deeds.' },
  Loyalty: { icon: '👑', title: 'Loyalty', description: 'Commitment to rulers and ideals.', fact: 'Loyalty bound medieval societies.' },
  Ambition: { icon: '🎯', title: 'Ambition', description: 'Drive to achieve power and glory.', fact: 'Ambition built empires and nations.' },
  Peace: { icon: '☮️', title: 'Peace', description: 'State of harmony between peoples.', fact: 'Peace enables civilization to flourish.' },
  Alliance: { icon: '🤝', title: 'Alliance', description: 'Union of powers for mutual benefit.', fact: 'Alliances shifted the balance of power.' },
  Legacy: { icon: '📜', title: 'Legacy', description: 'Inheritance passed through history.', fact: 'Legacy is how civilizations endure.' }
};

const baseElements = ['Human', 'Water', 'Land', 'Fire', 'Food', 'Shelter', 'Tool', 'Animal', 'Time', 'Movement'];

const combinationRules = {
  // Basic foundations
  'Human+Food': 'Farming', 'Human+Shelter': 'Settlement', 'Tool+Land': 'Farming', 'Animal+Human': 'Domestication',
  'Farming+Settlement': 'Society', 'Settlement+Human': 'Society', 'Society+Time': 'Law', 'Society+Law': 'Government',
  'Shelter+Fire': 'Culture', 'Human+Time': 'Writing', 'Culture+Writing': 'Civilization', 'Human+Culture': 'People',
  'Tool+Movement': 'Trade', 'Trade+Movement': 'Commerce', 'Farming+Tool': 'Industry', 'Tool+Fire': 'Forge',
  'Government+People': 'Democracy', 'Industry+Time': 'Technology', 'Civilization+People': 'Revolution', 'Revolution+Government': 'NewNation',
  'Human+Movement': 'Exploration', 'Land+Fire': 'Iron', 'Fire+Iron': 'Gunpowder', 'Tool+Iron': 'Weapon', 'Weapon+Time': 'Force',
  'Fire+Gunpowder': 'Explosion', 'Iron+Gunpowder': 'Cannon', 'Weapon+Human': 'Soldier', 'Soldier+Animal': 'Cavalry',
  'Human+Iron': 'Shield', 'Soldier+Shield': 'Defense', 'Settlement+Shield': 'Fortress', 'Cavalry+War': 'Battle',
  'War+Fortress': 'Siege', 'Trade+Railroad': 'Economy', 'Government+Law': 'Constitution', 'Government+Constitution': 'Republic',
  'Civilization+Railroad': 'Empire', 'Iron+Railroad': 'Locomotive', 'War+Gunpowder': 'Battle', 'Farming+Water': 'Irrigation',
  'Exploration+Movement': 'Discovery', 'Technology+Time': 'Aviation', 'Economy+Trade': 'Market', 'Civilization+Trade': 'Economy',
  'Empire+Revolution': 'NewNation', 'Force+Weapon': 'War', 'Iron+Movement': 'Railroad', 'Water+Weapon': 'Navy',

  // Ancient Egypt
  'Settlement+Water': 'Nile', 'Civilization+Water': 'Egypt', 'Government+Human': 'Pharaoh', 'Pharaoh+Egypt': 'Egypt',
  'Egypt+Tool': 'Pyramid', 'Human+Government': 'Pharaoh', 'Pharaoh+Settlement': 'Egypt', 'Writing+Egypt': 'Papyrus',
  'Papyrus+Writing': 'Hieroglyphics', 'Egypt+Culture': 'Hieroglyphics',

  // Ancient Greece & Rome
  'Culture+Human': 'Philosophy', 'Writing+Philosopher': 'Philosopher', 'Civilization+Philosopher': 'Greece',
  'Society+Democracy': 'Greece', 'Movement+Competition': 'Olympics', 'Human+Competition': 'Olympics',
  'Government+Law': 'Rome', 'Civilization+Government': 'Rome', 'Roman+Warfare': 'Caesar', 'Government+Force': 'Caesar',
  'Rome+Engineering': 'Aqueduct', 'Water+Engineering': 'Aqueduct', 'Technology+Water': 'Aqueduct',
  'Rome+Settlement': 'Colosseum', 'Battle+Building': 'Colosseum', 'Rome+Culture': 'Latin', 'Writing+Empire': 'Latin',

  // Mesopotamia
  'Settlement+River': 'Mesopotamia', 'Water+Civilization': 'Mesopotamia', 'Civilization+Water': 'Mesopotamia',

  // Medieval
  'Soldier+Government': 'Knight', 'Honor+Warrior': 'Knight', 'Society+Hierarchy': 'Feudalism', 'Land+Government': 'Feudalism',
  'Fortress+Medieval': 'Castle', 'Feudalism+Fortification': 'Castle', 'Knight+Code': 'Chivalry', 'Honor+Knight': 'Chivalry',
  'Feudalism+Authority': 'Lord', 'Government+Land': 'Lord', 'Lord+Obligation': 'Vassal', 'Society+Subordination': 'Vassal',
  'Settlement+Religion': 'Monastery', 'Shelter+Spirituality': 'Monastery', 'Monastery+Leadership': 'Abbey', 'Bishop+Authority': 'Abbey',
  'Time+Disease': 'Plague', 'Death+Mortality': 'Plague', 'War+Spirituality': 'Crusade', 'Religion+Conflict': 'Crusade',
  'Religion+Government': 'Bishop', 'Spirituality+Leadership': 'Bishop', 'Culture+Woven': 'Tapestry', 'Art+Story': 'Tapestry',
  'Knight+Battle': 'Joust', 'Competition+Warrior': 'Joust', 'Knight+Identity': 'Heraldry', 'Symbol+Authority': 'Heraldry',
  'Government+Authentication': 'Seal', 'Authority+Mark': 'Seal',

  // Renaissance
  'Civilization+Creation': 'Art', 'Culture+Expression': 'Art', 'Philosophy+Nature': 'Science', 'Observation+Study': 'Science',
  'Art+Genius': 'Leonardo', 'Science+Art': 'Leonardo', 'Material+Sculpture': 'Sculpture', 'Art+Form': 'Sculpture',
  'Pigment+Art': 'Painting', 'Color+Canvas': 'Painting', 'Art+Depth': 'Perspective', 'Geometry+Vision': 'Perspective',
  'Human+Philosophy': 'Humanism', 'Culture+Individual': 'Humanism', 'Technology+Printing': 'PrintingPress', 'Writing+Mass': 'PrintingPress',
  'PrintingPress+Inventor': 'Gutenberg', 'Technology+Innovation': 'Gutenberg',

  // Age of Exploration
  'Movement+New': 'Columbus', 'Ocean+Explorer': 'Columbus', 'Direction+Skill': 'Navigator', 'Navigation+Expert': 'Navigator',
  'Technology+Direction': 'Compass', 'Tool+Navigation': 'Compass', 'Technology+Vision': 'Telescope', 'Science+Distance': 'Telescope',
  'Geography+Mapping': 'Cartography', 'Writing+Territory': 'Cartography', 'Recording+Territory': 'Map', 'Geography+Record': 'Map',
  'Trade+Human': 'Merchant', 'Commerce+Individual': 'Merchant', 'Trade+Valuable': 'SpiceTrade', 'Goods+Exchange': 'SpiceTrade',
  'Engineering+Ocean': 'Ship', 'Movement+Water': 'Ship', 'Ship+Large': 'Galleon', 'Ship+European': 'Galleon',
  'Settlement+Empire': 'Colony', 'Government+Territory': 'Colony', 'Discovery+Tropical': 'Caribbean', 'Island+Colonial': 'Caribbean',

  // Philosophy & Science
  'Philosophy+Study': 'Reason', 'Thought+Logic': 'Reason', 'Science+Individual': 'Scientist', 'Study+Expert': 'Scientist',
  'Science+Study': 'Experiment', 'Hypothesis+Test': 'Experiment', 'Experiment+Principle': 'Theory', 'Observation+Principle': 'Theory',
  'Settlement+Learning': 'Academy', 'Knowledge+Institution': 'Academy', 'Science+Breakthrough': 'Newton', 'Physics+Genius': 'Newton',

  // Industrial Revolution
  'Industry+Building': 'Factory', 'Production+Facility': 'Factory', 'Fire+Pressure': 'Steam', 'Energy+Expansion': 'Steam',
  'Fire+Underground': 'Coal', 'Energy+Fuel': 'Coal', 'Grain+Technology': 'Mill', 'Production+Water': 'Mill',
  'Labor+Work': 'Worker', 'Civilization+Working': 'Worker', 'Plant+Industry': 'Textile', 'Fiber+Factory': 'Textile',
  'Machine+Part': 'Gear', 'Technology+Rotation': 'Gear', 'Power+Conversion': 'Engine', 'Machine+Motion': 'Engine',
  'Power+Technology': 'Electricity', 'Energy+Discovery': 'Electricity', 'Communication+Distance': 'Telegraph', 'Technology+Message': 'Telegraph',
  'Technology+Regulation': 'Valve', 'Machine+Control': 'Valve', 'Water+Machine': 'Turbine', 'Machine+Rotation': 'Turbine',

  // Weapons Evolution
  'Tool+Combat': 'Spear', 'Weapon+Thrust': 'Spear', 'Tension+Projectile': 'Bow', 'Arrow+Launch': 'Bow', 'Long+Pole': 'Pike',
  'Spear+Extension': 'Pike', 'Powder+Firearm': 'Musket', 'Gun+Soldier': 'Musket', 'Accuracy+Firearm': 'Rifle', 'Rifling+Gun': 'Rifle',
  'Technology+Combat': 'Tank', 'War+Machine': 'Tank', 'Armed+Ship': 'Warship', 'Navy+Weapon': 'Warship', 'Metal+Protection': 'Armor',
  'Leather+Defense': 'Armor', 'Protection+Head': 'Helmet', 'Metal+Headgear': 'Helmet', 'Mounted+Pole': 'Lance', 'Horse+Weapon': 'Lance',
  'Mechanical+Projectile': 'Crossbow', 'Spring+Arrow': 'Crossbow', 'Projectile+Weapon': 'Arrow', 'Ammunition+Arrow': 'Arrow',

  // Culture & Knowledge
  'Ceremony+Harmony': 'Music', 'Expression+Sound': 'Music', 'Narrative+Writing': 'Literature', 'Story+Record': 'Literature',
  'Sound+Communication': 'Language', 'Voice+System': 'Language', 'Belief+Practice': 'Religion', 'Spirituality+Community': 'Religion',
  'Spirituality+Leader': 'Priest', 'Religion+Authority': 'Priest', 'Sacred+Building': 'Church', 'Religion+Architecture': 'Church',
  'Knowledge+Expert': 'Scholar', 'Study+Wisdom': 'Scholar', 'Knowledge+Pages': 'Book', 'Writing+Binding': 'Book',
  'Books+Storage': 'Library', 'Knowledge+Preservation': 'Library', 'Craft+Organization': 'Guild', 'Trade+Regulation': 'Guild',

  // Social & Economic Systems
  'Work+Human': 'Labor', 'Effort+Civilization': 'Labor', 'Land+Farming': 'Peasant', 'Feudalism+Worker': 'Peasant',
  'Revenue+Government': 'Tax', 'Wealth+Extraction': 'Tax', 'Exchange+Medium': 'Money', 'Currency+Value': 'Money',
  'Loan+Future': 'Debt', 'Money+Obligation': 'Debt', 'Finance+System': 'Banking', 'Economy+Credit': 'Banking',

  // Agriculture & Resources
  'Harvest+Grain': 'Grain', 'Farming+Crop': 'Grain', 'Grain+Specific': 'Wheat', 'Cultivation+Grain': 'Wheat',
  'Agriculture+Cycling': 'CropRotation', 'Field+Management': 'CropRotation', 'Earth+Tool': 'Plow', 'Farming+Implement': 'Plow',
  'Copper+Tin': 'Bronze', 'Metal+Alloy': 'Bronze', 'Ore+Metal': 'Copper', 'Mining+Copper': 'Copper', 'Metal+Silvery': 'Tin',
  'Ore+Smelting': 'Tin', 'Iron+Carbon': 'Steel', 'Hardening+Metal': 'Steel', 'Underground+Liquid': 'Oil', 'Fuel+Fossil': 'Oil',

  // Transportation
  'Riding+Domesticated': 'Horse', 'Animal+Riding': 'Horse', 'Wheel+Comfort': 'Carriage', 'Vehicle+Passenger': 'Carriage',
  'Wheel+Hauling': 'Wagon', 'Transport+Cargo': 'Wagon', 'Structure+Connection': 'Bridge', 'Engineering+Crossing': 'Bridge',
  'Travel+Pathway': 'Road', 'Network+Land': 'Road', 'Water+Channel': 'Canal', 'Engineering+Waterway': 'Canal',
  'Maritime+Facility': 'Port', 'Harbor+Structure': 'Port', 'Loading+Facility': 'Dock', 'Maritime+Platform': 'Dock',

  // Modern Era
  'Broadcast+Voice': 'Radio', 'Technology+Radio': 'Radio', 'Visual+Broadcast': 'Television', 'Technology+Screen': 'Television',
  'Global+Connection': 'Internet', 'Computer+Network': 'Internet', 'Distance+Voice': 'Telephone', 'Technology+Voice': 'Telephone',
  'Machine+Data': 'Computer', 'Technology+Logic': 'Computer', 'Space+Signal': 'Satellite', 'Orbit+Communication': 'Satellite',
  'Atomic+Energy': 'Nuclear', 'Power+Atomic': 'Nuclear', 'Matter+Particle': 'Atomic', 'Science+Fundamental': 'Atomic',
  'Engine+Sky': 'Rocket', 'Propulsion+Flight': 'Rocket', 'Cosmos+Exploration': 'Space', 'Beyond+Earth': 'Space',

  // Abstract Concepts
  'Warrior+Code': 'Honor', 'Knight+Virtue': 'Honor', 'Servant+Commitment': 'Loyalty', 'Ruler+Devotion': 'Loyalty',
  'Goal+Desire': 'Ambition', 'Drive+Power': 'Ambition', 'War+Settlement': 'Peace', 'Conflict+Resolution': 'Peace',
  'Alliance+Politics': 'Alliance', 'Union+Coalition': 'Alliance', 'Heritage+Time': 'Legacy', 'Memory+Inheritance': 'Legacy',

  // Cross-connections for full reachability
  'Philosopher+Teaching': 'Academy', 'Scholar+Institution': 'Academy', 'Government+Sport': 'Olympics',
  'Trade+Person': 'Merchant', 'Commerce+Individual': 'Merchant', 'Civilization+Memory': 'History',
  'History+Record': 'Writing', 'Culture+History': 'Culture', 'Medieval+Society': 'Feudalism',
  'Organization+Craft': 'Guild', 'Regulation+Trade': 'Guild', 'Material+Craft': 'Craft',
  'Craft+Skill': 'Artisan', 'Guild+Membership': 'Guild', 'Pottery+Material': 'Clay',
  'Art+Performance': 'Theater', 'Ceremony+Theater': 'Theater', 'Trade+Port': 'Port',
  'Harbor+Naval': 'Navy', 'Colonial+Empire': 'Empire', 'Authority+Dynasty': 'Empire'
};

const normalizedRules = {};
Object.entries(combinationRules).forEach(([pair, result]) => {
  const [left, right] = pair.split('+');
  normalizedRules[sortedKey(left, right)] = result;
});

const questTemplates = [
  { id: 'basics', title: 'Farming Begins', description: 'Combine Food or Tool with Land to start agriculture.', target: ['Farming'], xp: 100 },
  { id: 'society', title: 'Build Society', description: 'Combine Farming with Settlement to establish order.', target: ['Society'], xp: 150 },
  { id: 'knowledge', title: 'Preserve Knowledge', description: 'Combine Human and Time to discover Writing.', target: ['Writing'], xp: 120 },
  { id: 'gunpowder', title: 'Create Gunpowder', description: 'Combine Fire and Iron to unlock explosive power.', target: ['Gunpowder'], xp: 200 },
  { id: 'civilization', title: 'Build Civilization', description: 'Combine Culture with Writing to create Civilization.', target: ['Civilization'], xp: 250 },
  { id: 'empire', title: 'Build an Empire', description: 'Combine Civilization with Railroad to establish a vast realm.', target: ['Empire'], xp: 300 },
  { id: 'cavalry', title: 'Forge a Cavalry', description: 'Combine Soldier with Animal to create mounted forces.', target: ['Cavalry'], xp: 180 },
  { id: 'exploration', title: 'Begin Exploration', description: 'Discover through Human and Movement combinations.', target: ['Discovery'], xp: 140 },
  { id: 'revolution', title: 'Trigger Revolution', description: 'Brew unrest and reshape the order of your world.', target: ['Revolution'], xp: 250 },
  { id: 'industry', title: 'Industrial Age', description: 'Combine Farming and Tool to unlock Industry.', target: ['Industry'], xp: 170 }
];

const discovered = new Set();
const discoveryOrder = [];
const completedQuests = new Set();
let combinationCount = 0;
let totalXP = 0;
let currentDrag = null;
let dragSource = null;
const workspaceElements = new Map();

const elementsList = document.getElementById('elements-list');
const workspace = document.getElementById('workspace');
const resultName = document.getElementById('result-name');
const resultDescription = document.getElementById('result-description');
const resultFlare = document.getElementById('result-flare');
const discoveryCount = document.getElementById('discovery-count');
const totalCount = document.getElementById('total-count');
const combinationCountEl = document.getElementById('combination-count');
const elementIndexList = document.getElementById('element-index-list');
const questsGrid = document.getElementById('quests-grid');
const indexDiscoveryCount = document.getElementById('index-discovery-count');
const progressDiscovery = document.getElementById('progress-discovery');
const progressDiscoveryText = document.getElementById('progress-discovery-text');
const progressQuests = document.getElementById('progress-quests');
const progressQuestsText = document.getElementById('progress-quests-text');
const achievementList = document.getElementById('achievement-list');
const notification = document.getElementById('result-message');
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');
const hintsList = document.getElementById('hints-list');
const headerXP = document.getElementById('header-xp');
const headerLevel = document.getElementById('header-level');
const resetBtn = document.getElementById('reset-game-btn');

function sortedKey(a, b) { return a < b ? `${a}+${b}` : `${b}+${a}`; }
function getElementData(name) { return elementsData[name] || { icon: '❓', title: name, description: 'A mystery.', fact: 'Unknown.' }; }
function getLevel() { return Math.floor(totalXP / 500) + 1; }

function saveProgress() {
  localStorage.setItem('origins_save', JSON.stringify({
    discovered: Array.from(discovered),
    order: discoveryOrder,
    combinationCount,
    totalXP,
    completedQuests: Array.from(completedQuests)
  }));
}

function loadProgress() {
  const saved = localStorage.getItem('origins_save');
  if (!saved) return;
  try {
    const data = JSON.parse(saved);
    if (Array.isArray(data.discovered)) data.discovered.forEach(n => discovered.add(n));
    if (Array.isArray(data.order)) discoveryOrder.push(...data.order);
    if (typeof data.combinationCount === 'number') combinationCount = data.combinationCount;
    if (typeof data.totalXP === 'number') totalXP = data.totalXP;
    if (Array.isArray(data.completedQuests)) data.completedQuests.forEach(id => completedQuests.add(id));
  } catch (e) { console.error('Load error:', e); }
}

function resetGame() {
  if (confirm('🔥 Reset game? This cannot be undone!')) {
    discovered.clear();
    discoveryOrder.length = 0;
    completedQuests.clear();
    combinationCount = 0;
    totalXP = 0;
    workspaceElements.forEach(el => el.remove());
    workspaceElements.clear();
    localStorage.removeItem('origins_save');
    initialize();
    showNotification('Game reset.');
  }
}

function initialize() {
  loadProgress();
  if (discovered.size === 0) {
    baseElements.forEach(name => { discovered.add(name); discoveryOrder.push(name); });
  } else {
    baseElements.forEach(name => {
      if (!discovered.has(name)) { discovered.add(name); discoveryOrder.push(name); }
    });
  }
  refreshSidebar();
  updateStats();
  populateIndex();
  populateQuests();
  updateProgressTab();
}

function showNotification(message) {
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => notification.classList.remove('show'), 2600);
}

function createElementCard(name) {
  const data = getElementData(name);
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'element-card';
  card.draggable = true;
  card.dataset.element = name;
  card.innerHTML = `<div class="element-icon">${data.icon}</div><div class="element-info"><strong>${data.title}</strong><span>${data.description}</span></div>`;
  card.addEventListener('dragstart', (e) => {
    currentDrag = name;
    dragSource = 'sidebar';
    e.dataTransfer.setData('text/plain', name);
    e.dataTransfer.effectAllowed = 'copy';
  });
  card.addEventListener('dragend', () => { currentDrag = null; dragSource = null; });
  return card;
}

function refreshSidebar() {
  elementsList.innerHTML = '';
  const sorted = Array.from(discovered).sort((a, b) => discoveryOrder.indexOf(a) - discoveryOrder.indexOf(b));
  sorted.forEach(name => elementsList.appendChild(createElementCard(name)));
  updateHints();
}

function updateHints() {
  if (!hintsList) return;
  hintsList.innerHTML = '';
  const possible = new Set();
  discovered.forEach(name => getPossibleCombinations(name).forEach(r => possible.add(r)));
  Array.from(possible).slice(0, 5).forEach(result => {
    const data = getElementData(result);
    const hint = document.createElement('div');
    hint.className = 'hint-item';
    hint.innerHTML = `<span>${data.icon}</span> ${data.title}`;
    hintsList.appendChild(hint);
  });
}

function createWorkspaceElement(name) {
  const data = getElementData(name);
  const el = document.createElement('div');
  el.className = 'workspace-element';
  el.draggable = true;
  el.dataset.element = name;
  el.innerHTML = `<div class="workspace-icon">${data.icon}</div><div class="workspace-name">${data.title}</div>`;
  workspaceElements.set(name, el);
  el.addEventListener('dragstart', (e) => {
    currentDrag = name;
    dragSource = 'workspace';
    e.dataTransfer.setData('text/plain', name);
    e.dataTransfer.effectAllowed = 'move';
  });
  el.addEventListener('dragover', (e) => { e.preventDefault(); el.classList.add('selected'); });
  el.addEventListener('dragleave', () => { el.classList.remove('selected'); });
  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('selected');
    const src = e.dataTransfer.getData('text/plain');
    if (!src || src === name) return;
    attemptCombination(src, name);
  });
  return el;
}

function placeOnWorkbench(name, event) {
  const overlay = workspace.querySelector('.workbench-overlay');
  if (overlay) overlay.style.display = 'none';
  if (workspaceElements.has(name)) {
    const el = workspaceElements.get(name);
    if (event) {
      const rect = workspace.getBoundingClientRect();
      const x = Math.max(0, Math.min(event.clientX - rect.left - 70, rect.width - 140));
      const y = Math.max(0, Math.min(event.clientY - rect.top - 25, rect.height - 50));
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    }
    return;
  }
  const el = createWorkspaceElement(name);
  if (event) {
    const rect = workspace.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left - 70, rect.width - 140));
    const y = Math.max(0, Math.min(event.clientY - rect.top - 25, rect.height - 50));
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  } else {
    el.style.left = `${Math.random() * 260 + 20}px`;
    el.style.top = `${Math.random() * 280 + 20}px`;
  }
  workspace.appendChild(el);
}

function attemptCombination(first, second) {
  const key = sortedKey(first, second);
  const result = normalizedRules[key];
  if (!result) {
    showNotification('❌ Cannot combine those elements.');
    return;
  }
  if (workspaceElements.has(first)) { workspaceElements.get(first).remove(); workspaceElements.delete(first); }
  if (workspaceElements.has(second)) { workspaceElements.get(second).remove(); workspaceElements.delete(second); }

  combinationCount += 1;
  let isNew = false;
  if (!discovered.has(result)) {
    isNew = true;
    discovered.add(result);
    discoveryOrder.push(result);
    totalXP += 50;
  } else {
    totalXP += 10;
  }
  saveProgress();
  refreshSidebar();
  populateIndex();
  populateQuests();
  updateProgressTab();
  showNotification(isNew ? `✨ Discovered ${getElementData(result).title}! +50 XP` : `🔁 ${getElementData(result).title} +10 XP`);
  updateStats();
  displayResult(result);
}

function displayResult(name) {
  const data = getElementData(name);
  resultName.textContent = data.title;
  resultDescription.textContent = data.description;
  resultFlare.classList.add('active');
  setTimeout(() => resultFlare.classList.remove('active'), 1200);
}

function updateStats() {
  discoveryCount.textContent = discovered.size;
  totalCount.textContent = Object.keys(elementsData).length;
  indexDiscoveryCount.textContent = discovered.size;
  combinationCountEl.textContent = combinationCount;
  headerXP.textContent = totalXP;
  headerLevel.textContent = getLevel();
}

function getPossibleCombinations(name) {
  return Object.entries(normalizedRules)
    .filter(([pair]) => pair.includes(name))
    .map(([, result]) => result)
    .filter((v, i, a) => a.indexOf(v) === i)
    .filter(r => !discovered.has(r));
}

function getAllIndexCombinations(name) {
  return Object.entries(combinationRules)
    .filter(([pair]) => pair.split('+').includes(name))
    .map(([pair, result]) => ({ pair, result }));
}

function populateIndex() {
  elementIndexList.innerHTML = '';
  const list = Object.keys(elementsData).sort((a, b) => {
    const aDiscovered = discovered.has(a);
    const bDiscovered = discovered.has(b);
    if (aDiscovered && bDiscovered) return discoveryOrder.indexOf(a) - discoveryOrder.indexOf(b);
    if (aDiscovered) return -1;
    if (bDiscovered) return 1;
    return a.localeCompare(b);
  });

  list.forEach((name) => {
    const data = getElementData(name);
    const comboEntries = getAllIndexCombinations(name);
    const li = document.createElement('li');
    li.className = 'element-index-entry';

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.innerHTML = `<span class="index-icon">${data.icon}</span><strong>${data.title}</strong> <span class="element-label">${discovered.has(name) ? `#${discoveryOrder.indexOf(name) + 1}` : 'Locked'}</span>`;
    details.appendChild(summary);

    const body = document.createElement('div');
    body.className = 'index-details';
    body.innerHTML = `<p>${data.description}</p><p class="index-fact">${data.fact}</p>`;

    const comboTitle = document.createElement('div');
    comboTitle.className = 'combo-header';
    comboTitle.textContent = comboEntries.length ? 'Combinations' : 'No known combinations yet';
    body.appendChild(comboTitle);

    if (comboEntries.length) {
      const comboList = document.createElement('ul');
      comboList.className = 'combo-list';
      comboEntries.forEach(({ pair, result }) => {
        const comboItem = document.createElement('li');
        comboItem.textContent = `${pair} → ${getElementData(result).title}`;
        comboList.appendChild(comboItem);
      });
      body.appendChild(comboList);
    }

    details.appendChild(body);
    if (!discovered.has(name)) {
      details.classList.add('locked');
    }
    li.appendChild(details);
    elementIndexList.appendChild(li);
  });
}

function populateQuests() {
  questsGrid.innerHTML = '';
  questTemplates.forEach((quest) => {
    const completed = quest.target.every(t => discovered.has(t));
    const progress = Math.round((quest.target.filter(t => discovered.has(t)).length / quest.target.length) * 100);
    const card = document.createElement('article');
    card.className = 'quest-card' + (completed ? ' completed' : '');
    card.innerHTML = `
      <div class="quest-top"><div class="quest-icon">${completed ? '✓' : '🎯'}</div><div><h3 class="quest-title">${quest.title}</h3><p class="quest-description">${quest.description}</p></div></div>
      <div class="quest-progress"><div class="quest-progress-fill" style="width:${progress}%"></div></div>
      <div class="quest-status"><span>${completed ? '✓ Complete' : progress + '% done'}</span><span>+${quest.xp} XP</span></div>
    `;
    questsGrid.appendChild(card);
  });
}

function updateProgressTab() {
  const total = Object.keys(elementsData).length;
  const discoPercent = Math.round((discovered.size / total) * 100);
  const completedList = questTemplates.filter(q => q.target.every(t => discovered.has(t)));
  const questPercent = Math.round((completedList.length / questTemplates.length) * 100);

  progressDiscovery.style.width = `${discoPercent}%`;
  progressDiscoveryText.textContent = `${discoPercent}%`;
  progressQuests.style.width = `${questPercent}%`;
  progressQuestsText.textContent = `${questPercent}%`;
  achievementList.innerHTML = '';

  questTemplates.forEach((quest) => {
    const item = document.createElement('li');
    const done = quest.target.every(t => discovered.has(t));
    item.className = done ? 'completed-quest' : '';
    item.textContent = `${done ? '✓' : '•'} ${quest.title}`;
    achievementList.appendChild(item);
  });

  if (discoPercent === 100) {
    const legend = document.createElement('li');
    legend.className = 'completed-quest';
    legend.innerHTML = '👑 <strong>FRONTIER LEGEND!</strong>';
    achievementList.appendChild(legend);
  }
}

workspace.addEventListener('dragover', (e) => { e.preventDefault(); });
workspace.addEventListener('drop', (e) => {
  e.preventDefault();
  const name = e.dataTransfer.getData('text/plain');
  if (name) placeOnWorkbench(name, e);
});

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all tabs and panels
    tabButtons.forEach(t => t.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    // Add active class to the clicked tab and corresponding panel
    btn.classList.add('active');
    const targetPanel = document.getElementById(`${btn.dataset.tab}-tab`);
    targetPanel.classList.add('active');
  });
});

resetBtn.addEventListener('click', resetGame);

initialize();

function startBackgroundMusic() {
  if (window.musicStarted) return;
  window.musicStarted = true;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audioCtx = new AudioContext();
  const master = audioCtx.createGain();
  master.gain.value = 0.04;
  master.connect(audioCtx.destination);

  const carrier = audioCtx.createOscillator();
  carrier.type = 'sine';
  carrier.frequency.value = 220;

  const modulator = audioCtx.createOscillator();
  modulator.type = 'triangle';
  modulator.frequency.value = 0.15;

  const modulation = audioCtx.createGain();
  modulation.gain.value = 40;
  modulator.connect(modulation);
  modulation.connect(carrier.frequency);
  carrier.connect(master);
  carrier.start();
  modulator.start();

  const chordNotes = [220, 261.63, 329.63];
  chordNotes.forEach((freq, index) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.value = freq;
    osc.type = 'triangle';
    gain.gain.value = 0.01;
    osc.connect(gain);
    gain.connect(master);
    osc.start(audioCtx.currentTime + index * 0.1);
    osc.stop(audioCtx.currentTime + 12);
  });
}

document.body.addEventListener('click', () => {
  startBackgroundMusic();
}, { once: true });
