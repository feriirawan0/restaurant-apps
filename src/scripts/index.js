import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

// Fetch data json
import("../DATA.json").then(({ default: jsonData }) => {
  // console.log(jsonData);
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
    <div class="post">
    <div class="city">${data["city"]}</div>
    <div class="img_item">
      <img src="${data["pictureId"]}" alt="${data["name"]}" title="${data["name"]}">
    </div>
      <div class="list_content">
          <p class="list_rating">
              Rating : 
              <a href="#" class="list_rating_value">${data["rating"]}</a>
          </p>
          <h1 class="list_title"><a href="#">${data["name"]}</a></h1>
          <div class="list_desc">${data["description"].slice(0, 150)}...</div>
      </div>
    </div>
      `;
  });
  document.querySelector("#tes").innerHTML = dataList;
});

// menu
const menu = document.querySelector("#menu");
const nav = document.querySelector(".nav__list");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
menu.addEventListener("click", function (event) {
  nav.classList.toggle("open");
  event.stopPropagation;
});

hero.addEventListener("click", function () {
  nav.classList.remove("open");
});

main.addEventListener("click", function () {
  nav.classList.remove("open");
});


console.log("Hello Coders! :)");
