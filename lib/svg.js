const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./shapes");
const fs = require("fs");

class SVG {
    constructor() {
        this.width = 300;
        this.height = 200;
        this.shapes = [];
        this.letters = "";
        this.lettercolors = "";
        this.questions = [
            {
                type: "input",
                message: "please choose three letters for your logo:",
                name: "letters",
            },
            {
                type: "input",
                message:
                    "Please enter a color keyword or hexadecimal number for your logo letters:",
                name: "lettercolors",
            },
            {
                type: "list",
                messages: "Please choose the shape of your logo:",
                name: "shapes",
                choices: ["Triangle", "Square", "Circle"],
            },
            {
                type: "input",
                message:
                    "Please enter a color keyword or hexadecimal number for your logo:",
                name: "colors",
            },
        ];
    }

    setShape(shape) {
        this.shapes.push(shape);
    }

    setText(text, color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textColor = color;
    }

    render() {
        let svgString = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;

        for (const shape of this.shapes) {
            svgString += shape.render(this.colors);
        }

        if (this.text) {
            svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }

        svgString += `</svg>`;
        return svgString;
    }

    run() {
        inquirer.prompt(this.questions).then((answers) => {
            const shapeClass = eval(answers["shapes"]);
            const shapeColor = answers["colors"];
            const text = answers["letters"];
            const textColor = answers["lettercolors"];

            const shape = new shapeClass();
            shape.setColor(shapeColor);
            this.setShape(shape);
            this.setText(text, textColor);

            const fileName = "logo.svg";
            const content = this.render();

            fs.writeFile(fileName, content, function (error) {
                if (error) {
                    return console.log(error);
                }
                console.log("Generated logo.svg");
            });

            console.log(content);
        });
    }
}

module.exports = SVG;
