class Shape{
  constructor(){
    this.colors = " ";
  }
  setColor(colors) {
    this.colors = colors;
  }
}

class Circle extends Shape{
render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.colors}" />`;
  }
}

class Square extends Shape{
render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.colors}" />`;
  }
}

class Triangle extends Shape {
  render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colors}" />`;
  }
}

module.exports = {Circle, Triangle, Square};
