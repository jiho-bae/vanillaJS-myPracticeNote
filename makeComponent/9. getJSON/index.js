const ul = document.querySelector("ul");

function getJson() {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const length = json.data.movies.length;
      for (let i = 0; i < length; i++) {
        const title = json.data.movies[i].title;
        const li = document.createElement("li");
        li.innerText = title;
        ul.appendChild(li);
      }
    });
}

function init() {
  getJson();
}

init();
