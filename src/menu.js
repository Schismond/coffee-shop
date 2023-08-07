function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = " ";

  function createDivWithClass(className) {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
  }

  function createHeading(textContent) {
    const heading = document.createElement("h2");
    heading.textContent = textContent;
    return heading;
  }

  function createImage(src) {
    const img = document.createElement("img");
    img.setAttribute("src", src);
    return img;
  }

  function createParagraphWithClass(className, textContent) {
    const para = document.createElement("p");
    para.classList.add(className);
    para.textContent = textContent;
    return para;
  }

  const searchBarDiv = createDivWithClass("search-bar");

  const heading = createHeading("ENJOY AMAZING COFFEE NOW !");
  searchBarDiv.appendChild(heading);

  const containerInputDiv = createDivWithClass("container-input");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search");
  input.setAttribute("name", "text");
  input.classList.add("input");
  containerInputDiv.appendChild(input);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "#000000");
  svg.setAttribute("width", "36px");
  svg.setAttribute("height", "36px");
  svg.setAttribute("viewBox", "0 0 1920 1920");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
  );
  path.setAttribute("fill-rule", "evenodd");
  svg.appendChild(path);
  containerInputDiv.appendChild(svg);

  searchBarDiv.appendChild(containerInputDiv);

  const cardsDiv = createDivWithClass("cards");

  function createCard(coffeeType, price) {
    const cardDiv = createDivWithClass("card");
    const img = createImage("img/cafe.jpg");
    const coffeeTypePara = createParagraphWithClass("coffee-type", coffeeType);
    const pricePara = createParagraphWithClass("price", price);

    cardDiv.appendChild(img);
    cardDiv.appendChild(coffeeTypePara);
    cardDiv.appendChild(pricePara);

    return cardDiv;
  }

  const coffeeData = [
    { coffeeType: "Espresso", price: "$11.97" },
    { coffeeType: "Cappucino", price: "$12.99" },
    { coffeeType: "Latte", price: "$13.66" },
    { coffeeType: "Mocha", price: "$9.98" },
    { coffeeType: "Glace", price: "$19.10" },
    { coffeeType: "Lungo", price: "$12.36" },
  ];

  coffeeData.forEach((data) => {
    const { coffeeType, price } = data;
    const card = createCard(coffeeType, price);
    cardsDiv.appendChild(card);
  });

  const targetElement = document.getElementById("main"); 
  targetElement.appendChild(searchBarDiv);
  targetElement.appendChild(cardsDiv);

  const linkTag = document.getElementById('myLink');
  linkTag.href = 'menu.css';

  document.head.appendChild(linkTag);
}

export default loadMenu;
