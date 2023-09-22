# JavaScript Project Template

Dette er et JavaScript-projekt, som er sat op med en simpel struktur, så det er let at starte et nyt projekt.

## Værktøjer

- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

## Plugins til Visual Studio Code

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


## Opsætning
- Installér Visual Studio Code.
- Installér Node.js.
- Installér Git.
- Åbn Visual Studio Code.
- Klon dette projekt fra versionskontrolmenuen.
- Åben mappen med det klonede projekt.
- Start en ny terminal.
- Skriv `npm install` i terminalen

# Hvordan afvikler jeg JavaScript-kode uden brug af min browser?

- Åbn f.eks. `test.js`.
- Tryk på F5 for at starte debugging.

# Hvordan laver jeg en p5.js-sketch?
- Start Live Server
- Åben `index.html` i browseren (localhost:5500)
- Nu bliver `mysketch.js` vist.
- For at lave en helt ny sketch gør følgende:
  - Opret en ny fil, f.eks. `sketch2.js`.
  - Tilføj følgende kode til `sketch2.js`:
    
    ```javascript
    function setup() {
      createCanvas(400, 400);
    }
  
    function draw() {
      background(220);
    }
  
    export default { setup, draw };
    ```
  - Åbn `sketch.js` og tilføj følgende `import`:

    ```javascript
    import { setup, draw } from "./sketch2.js";
    ```



