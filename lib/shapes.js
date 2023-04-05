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
