class Shape{
  constructor(){
    this.colors = "#00000";
  }
  setColor(colors) {
    this.colors = colors
  }
  render() {
    throw new Error("render method not implemented");
  }
}

class Circle extends Shape{
  constructor() {
    super();
    this.fillColor = this.colors;
    this.radius = 80;
    this.x = 150;
    this.y = 100;

  }
  setFillColor(fillColor) {
    this.fillColor = fillColor;
  }

render() {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.fillColors}" />`;
  }
}

class Square extends Shape{
  constructor() {
    super();
    this.fillColor = this.colors;
    this.width = 120;
    this.height = 120;
    this.x = 90;
    this.y = 40;
  }
  setFillColor(fillColor) {
    this.fillColor = fillColor;
  }

render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fillColor}" />`;
  }
}

class Triangle extends Shape {
  constructor() {
      super();
      this.fillColor = this.colors;
      this.points = "150, 18 244, 182 56, 182";
  }

  setFillColor(fillColor) {
      this.fillColor = fillColor;
  }

  render() {
      return `<polygon points="${this.points}" fill="${this.fillColor}" />`;
  }
}

module.exports = {Circle, Triangle, Square};

// module.exports = {
//   Shape, Circle, Triangle, Square
// }

// const Triangle = data.shapes.triangle
// const Square = data.shapes.square
// const Circle = data.shapes.circle
// const letterColors = data.shapes.letterColors

// function renderShapes(shapes) {
//     if (!shapes) {
//         return '';
//       } else if (shapes === Circle) {
//         `circle cx="150" cy="100" r="80"`
//       } else if (shapes === Square){
//         `rect x="90" y="40" width="120" height="120"`
//       } else if (shapes === Triangle) {
//         `polygon points="150, 18 244, 182 56, 182"`
//       }
// }

// function renderColor(colors) {
//     if (!colors) {
//         return '';
//     } return `fill="${colors}"`
// }

// function renderLetters(data) {
//     if (!letters) {
//         return '';
//     } return `<text fill="${data.shapes.letterColors}" font-size="45" font-family="Verdana" x="50" y="86">${letters}</text>`
// }

// //logo must be 300x200 pixels

// function generateLogo(data) {
// `<html>

//     <svg width="300" height="200">
//         <${renderShapes(data.shapes)}  ${renderColor(data.colors)}/>
//         ${renderLetters}
//     </svg>

// </html>`
// };

// module.exports = generateLogo;