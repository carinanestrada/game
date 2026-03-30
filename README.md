# game
game project for 376 Build a small, single-page web “game” and publish it with GitHub Pages. The project emphasizes clean HTML, Bootstrap 5, accessible UI, custom CSS, and modern JavaScript & jQuery. You’ll persist some game state with cookies or Web Storage and include a small settings form with client-side validation.

Examples of “game” scope Memory pairs, category sort/drag, quiz/trivia with timers, reaction time tester, word scramble, emoji match, simple clicker, “spot the difference,” etc. Keep it small but polished.

Deliverables Deployed Game: GitHub Pages URL.

Source Code: GitHub repo link.

Updated Dev Profile: Add a card that links to (a) Play Game and (b) Source Code + a screenshot thumbnail.

README.md: Project info, resources, and a short code explanation block.

Tech Requirements (Minimum Acceptance Criteria)

Repository & Deployment One repo, deployed to GitHub Pages from the main branch root. Directory layout:

/(root) index.html /scripts (JS modules) /styles (CSS) /images (assets, wireframes, screenshots) /pages (optional) README.md README.md includes: project name, date, game objective, brief rules, tech used, resource links, and one code snippet explained with triple backticks.

Wireframe Include at least one wireframe image (hand-drawn or digital) in /images/ and reference it in the README.

HTML (semantic + valid) Valid HTML5 document with a descriptive <title>.

Semantic layout with landmark elements: header, nav, main, footer.

Top navbar (Bootstrap 5) with links: Play/Reset, How to Play (or modal), and your Dev Profile.

Main area contains: game board, controls, score/progress display, and instructions.

Footer contains links to:

Your Dev Profile

This game’s repo

GitHub profile

Nu HTML Validator (constructed URL to your deployed page)

WAVE Accessibility checker (constructed URL to your deployed page)

✅ Validation links should point directly at your deployed page.

Bootstrap 5 (no jQuery required) Use at least two Bootstrap components with appropriate classes and data attributes (where applicable): Required component: Navbar

Choose at least one more: Cards, Modal, Offcanvas, Toast, Collapse/Accordion, Progress, Buttons/Badges Initialize with data attributes when possible (JS init allowed but explain why in comments).

CSS One custom stylesheet (e.g., /styles/game.css). Import a Google Font and use it.

Use at least two advanced selectors: nth-child, attribute selector, adjacent/child/sibling combinators, or pseudo-classes.

Provide a responsive layout (grid/flex) that works on mobile and desktop.

Include a reduced-motion friendly animation or transition (respect prefers-reduced-motion).

Define at least three CSS custom properties (--color-*, --spacing, etc.) and use them.

JavaScript (modern, modular) Use ES modules: at least two modules (e.g., game.js, storage.js). Data container: an array of objects representing game items (cards/questions/tiles/etc.). Use it to render the board/UI dynamically (DOM templating).

Randomization: shuffle or randomize something each new game (order, options, layout).

Events: add event listeners for start/reset, a primary gameplay event (click/flip/drag/drop), and form submission.

State: track and display progress (score, level, attempts, timer, etc.) live on screen.

Easter Egg: log a hint in the console that triggers a small, safe secret (e.g., theme swap, sample data load).

Storage (required): persist at least one of:

Player name, or

High score / best time, or

Theme/setting/preference Use either document.cookie or sessionStorage/localStorage. If you use cookies, set a reasonable expiration and path.

Reset: a control that clears round state and re-initializes the game.

Form + Client-Side Validation Include a small Settings / Player form (name, difficulty, theme, etc.). Use the Constraint Validation API (e.g., required, pattern, min/max) and show friendly inline errors.

On submit:

Validate inputs

Save preferences to cookie/session/local storage

Apply settings live (e.g., difficulty changes tiles; theme toggles class)

Accessibility & Quality Pass Nu (no errors; weird warnings OK if explained) and fix obvious issues (unclosed tags, nesting, missing attrs). Pass WAVE with no errors and address contrast/labels/alt text.

Keyboard operable: tab through interactive elements; visible focus outline.

Provide aria-live or clear textual updates for score/progress changes.

Ensure color contrast meets WCAG AA (use BS utilities or your own tokens).

Adaptive Area

RESERVED for any areas to focus on once I grade ALFA PROJECTS. Issue-Based Exceptions (Optional) If you’re blocked by scope, you may omit up to two minor requirements (not the core gameplay or storage/validation) with a documented GitHub Issue:

In code, add a comment where the omitted feature would go.

In GitHub, select those lines → “…” → Reference in a new issue.

Title: Omit: ; explain why; add label won't fix.

Link the issue back in your README under a “Known Omissions” section.

Refactor Your Dev Profile Add a project card with:

“Play Game” (deployed URL)

“Source Code” (repo)

Screenshot image (store in your profile repo, e.g., /images/game-thumb.jpg)

Add Nu & WAVE links for your profile page too and fix obvious errors.

Submission Submit only the URL to your Dev Profile. From there I’ll find your game, repo, and validation links.

Grading Rubric (100 pts) Game Functionality (30)

Core loop works, progress updates live (15)

Reset initializes a fresh round (5)

Randomization/shuffle implemented correctly (5)

Easter egg present with console hint (5)

Code Quality (25)

ES modules, clean structure, comments where helpful (8)

Data-driven rendering from an array of objects (8)

Events and state handled cleanly; no obvious globals/side effects (5)

README code block explains a non-trivial snippet clearly (4)

UI/UX + Bootstrap + Accessibility (20)

Uses Navbar + ≥1 additional BS component well (8)

Layout responsive, clear instructions, visible focus states (6)

aria/labels/alt text; live updates accessible (6)

HTML/CSS Standards (15)

Valid HTML5; semantic landmarks (7)

Google Font + advanced selectors + CSS variables; reduced-motion respected (8)

Storage + Form & Validation (10)

Cookie or Web Storage used appropriately and read on load (5)

Settings/player form with client-side validation and friendly errors (5)

Deductions: Missing validation links, inaccessible interactions, broken deployment, or missing README details.

Suggested Game Patterns (pick one) Memory Match: pairs of icons/images; track attempts + time; shuffle deck each run.

Categorize by Drag/Drop: drag items into correct bins; score increments on correct drop; timer optional.

Quiz/Flashcards: multiple-choice from a data array; randomized order; show correctness feedback; track streak.

Reaction/Reflex: random “go” signal; measure response time; keep best time in storage

