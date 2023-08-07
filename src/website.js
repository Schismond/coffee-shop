import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("div");
  homeButton.classList.add("link");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement("div");
  menuButton.classList.add("link");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("div");
  contactButton.classList.add("link");
  contactButton.textContent = "Contact Us";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".link");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  const madeByDiv = document.createElement("div");
  madeByDiv.className = "made-by";

  const madeByText = document.createElement("p");
  madeByText.textContent = "This website has been built by Schismond";

  const gitLink = document.createElement("a");
  gitLink.href = "https://github.com/Schismond";

  const gitImage = document.createElement("img");
  gitImage.className = "git";
  gitImage.src = "img/github.png";

  madeByDiv.appendChild(madeByText);
  gitLink.appendChild(gitImage);
  madeByDiv.appendChild(gitLink);

  footer.appendChild(madeByDiv);

  const attributionsHeading = document.createElement("h3");
  attributionsHeading.textContent = "Freepik Attributions :";

  const attributionsDiv = document.createElement("div");
  attributionsDiv.className = "attributions";

  const attributionLinks = [
    "https://shorturl.at/fgxDJ",
    "https://shorturl.at/buEG6",
    "https://shorturl.at/itNUZ",
  ];

  const attributionTexts = ["brgfx", "mrsiraphol", "chevanon"];

  for (let i = 0; i < attributionLinks.length; i++) {
    const attributionDiv = document.createElement("div");
    const attributionLink = document.createElement("a");
    attributionLink.href = attributionLinks[i];
    attributionLink.textContent = attributionTexts[i];
    attributionDiv.appendChild(attributionLink);
    attributionsDiv.appendChild(attributionDiv);
  }

  footer.appendChild(attributionsHeading);
  footer.appendChild(attributionsDiv);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");
  console.log(content);
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".link"));
  loadHome();
}

export default initializeWebsite;
