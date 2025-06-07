function generatePoem(event) {
    event.preventDefault();


new Typewriter('#poem', {
  strings: "la tombe dit a la rose",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

let poemFormElemnt = document.querySelector("#poem-generato-form")
poemFormElement.addEventlistner('submit', generatePoem);