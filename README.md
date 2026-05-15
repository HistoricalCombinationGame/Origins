# Origins

Origins is a historical combination game that helps players understand how basic ideas grow into complex systems.

## Concept
Students begin with simple, foundational elements like Human, Water, Fire, and Land. By combining two elements at a time, they can unlock increasingly advanced concepts such as Settlement, Government, Democracy, and Civilization.

## What the App Does
- Shows how small elements lead to large historical systems
- Teaches historical development step-by-step
- Makes learning interactive and exploratory
- Rewards discovery and progress tracking

## Core Progression
### Tier 1 - Basic Elements
Human, Water, Land, Fire, Food, Shelter, Tool, Animal, Time, Movement

### Tier 2
Human + Food → Survival
Human + Shelter → Settlement
Tool + Land → Farming
Animal + Human → Domestication

### Tier 3
Farming + Settlement → Village
Settlement + Human → Society
Society + Time → Law

### Tier 4
Society + Law → Government
Culture + Writing → Civilization
Trade + Movement → Commerce

### Advanced
Government + People → Democracy
Industry + Technology → Industrialization
Revolution + Government → New Nation

## How to Play
1. Open `index.html` in a browser.
2. Select two discovered elements.
3. Click **Combine** to reveal a new element.
4. Continue exploring until all elements are unlocked.

## Files
- `index.html` — game interface
- `styles.css` — visual layout and styling
- `script.js` — game logic and combination rules
- `supabase_setup.sql` — database schema for user progress saving

## Supabase Setup (Optional)
The game includes Supabase integration for saving user progress across sessions.

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and API keys from the dashboard

### 2. Set up the Database
1. In your Supabase dashboard, go to the SQL Editor
2. Run the contents of `supabase_setup.sql` to create the user_progress table

### 3. Configure the App
1. Open `script.js`
2. Replace `'https://your-project-ref.supabase.co'` with your actual Supabase project URL
3. The anon key is already configured

### 4. Enable Authentication
The app uses anonymous authentication, so users can save progress without creating accounts. If you want user accounts, you can modify the authentication flow.

## Notes
The app is designed for Grades 6–12 students, beginner history learners, and fans of crafting/combination games.
