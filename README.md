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

- Klon projektet
- Åben projektet i Visual Studio Code
- Åben terminalen i Visual Studio Code
- Skriv `npm install` i terminalen

# Kør JavaScript-kode i debug-mode

- Åbn f.eks. `test.js`.
- Tryk på F5 for at starte debugging.

# p5.js
- Start Live Server
- Åben `index.html` i browseren (localhost:5500)
- Nu bliver `mysketch.js` vist.
- Hvis du ønsker at lave en ny sketch, så opret en ny fil, f.eks. `sketch2.js` og 
  tilføj følgende kode:
  
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



