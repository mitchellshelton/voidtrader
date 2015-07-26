# Void Trader
- A space trading game by Mitchell R.K. Shelton

---

> Playground for a combined backbone/electron app.

- Learning some backbone basics from:
  - http://www.korenlc.com/backbone-js-tutorial-getting-started-with-backbone/

## Stuff Used

- electron:
  - http://electron.atom.io/
- require
  - http://requirejs.org/
- backbone
  - http://backbonejs.org/

## TODO

### Bugs

- Currently there is an error loading jquery in electron that doesn't exist in the browser
- Occasionally backbone isn't defined when refreshing the page.

### Goals

- Create Screens/GUI objects to easily construct pages
  - GameScreen
    - Parameters
      - Title
      - Description
      - Buttons
    - Instances
      - StartScreen
      - CreditsScreen
      - NewCharacterScreen
      - LoadCharacterScreen
      - SpaceStationScreen
      - BattleScreen
      - StatsScreen
  - GraphicalInterface
    - Button : GraphicalInterface
      - Title
      - Text
      - Action
    - Meter : GraphicalInterface
      - Title
      - Text
      - Value
    - SelectList : GraphicalInterface
      - Title
      - Options
- Create character creation system
- Create load/save system
- Create combat system
- Create trading system