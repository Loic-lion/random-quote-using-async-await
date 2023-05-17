const randomButton = document.querySelector(".random_button");
const section = document.querySelector(".container");

function randomQuoteGen() {
  section.innerHTML = "";
  fetch("https://thatsthespir.it/api")
    .then((response) => response.json())
    .then((data) => {
      let newDiv = document.createElement("div");
      newDiv.innerHTML =
        '<img src="' +
        data.photo +
        '" alt=" photo de ' +
        data.author +
        '"> <p class="container_quote">' +
        data.quote +
        '</p> <p class="container_name">' +
        data.author +
        "</p>";

      section.appendChild(newDiv);
    })
    .catch((error) => console.log("Il y a une erreur : ", error));
}

randomQuoteGen();
randomButton.addEventListener("click", randomQuoteGen);
