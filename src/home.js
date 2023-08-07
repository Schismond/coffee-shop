function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  const heading = document.createElement("h2");
  heading.innerHTML = "LIFE IS BETTER <br> WITH COFFEE";

  const button = document.createElement("button");
  button.textContent = "Menu";

  main.appendChild(heading);
  main.appendChild(button);
}

export default loadHome;
