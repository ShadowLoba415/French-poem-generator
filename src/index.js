function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");

    import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#poem', {
  strings: ['la tombe dit a la rose"'],
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

let poemFormElemnt = document.querySelector("#poem-generato-form")
poemFormElement.addEventlistner('submit', generatePoem)