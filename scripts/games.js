fetch("https://lasha-mgelashvili.github.io/gameServerAPI/server.json", {
  method: "GET",
})
  .then(function (responsedata) {
    if (!responsedata.ok) {
      throw "error data info";
    }
    return responsedata.json();
  })
  .then(function (responseInfoJS) {
    console.log(responseInfoJS);

    let divBox = document.createElement("div");
    divBox.classList.add("game-list");
    const fragment = document.createDocumentFragment();

    responseInfoJS.games.forEach(function (item) {
      let hTitle = document.createElement("h2");
      hTitle.textContent = item.name;
      hTitle.classList.add("game-title");
      hTitle.classList.add("accordion-title");

      let imgElement = document.createElement("img");
      imgElement.src = item.image;
      imgElement.classList.add("game-image");

      let pInfo = document.createElement("p");
      pInfo.textContent = item.info;
      pInfo.classList.add("game-info");

      let mainDiv = document.createElement("div");
      let headerBox = document.createElement("div");

      let gameInfoDIv = document.createElement("div");
      gameInfoDIv.classList.add("game-info-div");

      headerBox.classList.add("accordion-headeer");

      mainDiv.classList.add("games-main-div");
      mainDiv.classList.add("accordion-item");

      headerBox.appendChild(hTitle);
      headerBox.appendChild(imgElement);

      gameInfoDIv.appendChild(pInfo);

      mainDiv.appendChild(headerBox);

      mainDiv.appendChild(gameInfoDIv);

      fragment.appendChild(mainDiv);
    });
    divBox.appendChild(fragment);
    document.querySelector(".game-section").appendChild(divBox);
  })
  .catch(function (error) {
    if (error === 404) {
      let PError = document.createElement("p");
      PError.textContent = "server error";
      document.querySelector(".game-list").appendChild(PError);
    } else {
      console.log("error");
    }
  });

//--------------> Imported JS codes <------------

import { burger, dropLogin, headerBG, mainSwiper,  } from "./form.js";

// ----------> Burger Bar <---------------
burger();
// ----------> Drop Login <---------------
dropLogin();
//  -------------> Header BG <-------------
headerBG();
//------------> Control Swiper <----------------
mainSwiper();
//------------> Scroll To Top <-------------

//----------> JS Filter<-------------

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("searchInput");
  var gameList = document.getElementById("gameList");

  searchInput.addEventListener("click", function () {
    gameList.style.display = "block";
  });

  searchInput.addEventListener("input", function () {
    var searchTerm = searchInput.value.toLowerCase();
    var games = gameList.getElementsByTagName("li");

    for (var i = 0; i < games.length; i++) {
      var gameName = games[i].textContent.toLowerCase();

      if (gameName.includes(searchTerm)) {
        games[i].style.display = "block";
      } else {
        games[i].style.display = "none";
      }
    }
  });

  searchInput.addEventListener("blur", function () {
    gameList.style.display = "none";
  });

  fetch("https://lasha-mgelashvili.github.io/gameServerAPI/server.json") 
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data from API:", data);

      // Clear existing list items
      gameList.innerHTML = "";

      if (Array.isArray(data.games)) {
        data.games.forEach((game) => {
          let listItem = document.createElement("li");
          listItem.classList.add('search-bar-list')
          listItem.textContent = game.name;
          gameList.appendChild(listItem);
        });
      } else {
        console.error(
          "The 'games' property in data is not an array or does not exist."
        );
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});
