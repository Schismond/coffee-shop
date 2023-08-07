function loadHome() {
  var titleElement = document.querySelector("title");
  titleElement.textContent = "home";

  const main = document.getElementById("main");
  main.textContent = "";
  const heading = document.createElement("h2");
  heading.innerHTML = "LIFE IS BETTER <br> WITH COFFEE";

  const button = document.createElement("button");
  button.textContent = "Menu";

  main.appendChild(heading);
  main.appendChild(button);

  // Create a link element
  const linkTag = document.getElementById("myLink");
  linkTag.href = "home.css";

  document.head.appendChild(linkTag);
}

export default loadHome;
