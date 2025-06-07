function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey ="c41ea0t0206a28395238ff3c5b4e7o2c";
  let prompt = "";
  let context = "";
  let apiURL = 'https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&$context=${context}&key=${apikey}'
  // Make a call to the API

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);