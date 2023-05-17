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
        '</p> <span class="container_name">' +
        data.author +
        "</span>";

      section.appendChild(newDiv);

      section.removeChild(loader);

      let completeName = data.author;
      let splitName = completeName.split(" ");
      let name = splitName[0];

      fetch("https://api.agify.io/?name=" + name)
        .then((response) => response.json())
        .then((info) => {
          let newP = document.createElement("p");
          newP.className = "container_age";
          newP.innerHTML = "Age prédit: " + info.age;
          let spanName = document.querySelector(".container_name");

          let containerDiv = document.createElement("div");
          containerDiv.className = "container_predict";
          containerDiv.appendChild(spanName);
          containerDiv.appendChild(newP);
          section.appendChild(containerDiv);
        })
        .catch((error) => {
          section.removeChild(loader);
          console.log("Il y a une erreur : ", error);
        });
    })

    .catch((error) => {
      section.removeChild(loader);
      console.log("Il y a une erreur : ", error);
    });
}

randomQuoteGen();
randomButton.addEventListener("click", randomQuoteGen);
