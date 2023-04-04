const Triangle =data.shapes.triangle
const Square = data.shapes.square
const Circle = data.shapes.circle
const letterColors = data.shapes.letterColors

function renderShapes(shapes) {
    if (!shapes) {
        return '';
      } else if (shapes === Circle) {
        `circle cx="50" cy="50" r="40"`
      } else if (shapes === Square){
        `rect x="50" y="20" width="150" height="150"`
      } else if (shapes === Triangle) {
        `polygon points="50 15, 100 100, 0 100`
      }
}

function renderColor(colors) {
    if (!colors) {
        return '';
    } return `fill="${colors}"`
}

function renderLetters(letters) {
    if (!letters) {
        return '';
    } return `<text fill="${data.shapes.letterColors}" font-size="45" font-family="Verdana" x="50" y="86">${letters}</text>`
}

//logo must be 300x200 pixels

function generateLogo(data) {
`<html>

    <svg width="300" height="200">
        <${renderShapes(data.shapes)}  ${renderColor(data.colors)}/>
        ${renderLetters}
    </svg>

</html>`
};

module.exports = generateLogo;