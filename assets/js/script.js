const randomButton = document.querySelector(".random_button");
const section = document.querySelector(".container");

function randomQuoteGen() {
  section.innerHTML = "";

  const loader = document.createElement("div");
  loader.className = "loader";
  section.appendChild(loader);

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

      section.removeChild(loader);
    })
    .catch((error) => {
      section.removeChild(loader);
      console.log("Il y a une erreur : ", error);
    });
}

randomQuoteGen();
randomButton.addEventListener("click", randomQuoteGen);
