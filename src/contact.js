function loadContact() {


const main = document.getElementById("main");
main.textContent = "";

const leftDiv = document.createElement("div");
leftDiv.classList.add("left");

const imgElement = document.createElement("img");
imgElement.src = "img/illustration.jpg";

leftDiv.appendChild(imgElement);

const rightDiv = document.createElement("div");
rightDiv.classList.add("right");

const formElement = document.createElement("form");
formElement.action = "#";
formElement.method = "get";

const div1 = document.createElement("div");

const nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name");
nameLabel.textContent = "Name :";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.placeholder = "John Doe";
nameInput.required = true;

div1.appendChild(nameLabel);
div1.appendChild(nameInput);

const div2 = document.createElement("div");

const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "user_email");
emailLabel.textContent = "Email :";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "user_email";
emailInput.placeholder = "example@mail.com";
emailInput.name = "user_email";
emailInput.required = true;

div2.appendChild(emailLabel);
div2.appendChild(emailInput);

const messageLabel = document.createElement("label");
messageLabel.setAttribute("for", "form-message");
messageLabel.textContent = "Message:";

const messageTextarea = document.createElement("textarea");
messageTextarea.id = "form-message";
messageTextarea.rows = "10";
messageTextarea.cols = "50";
messageTextarea.name = "message";
messageTextarea.placeholder = "your message goes here";

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.id = "btn";
submitButton.textContent = "Submit";

formElement.appendChild(div1);
formElement.appendChild(div2);
formElement.appendChild(messageLabel);
formElement.appendChild(messageTextarea);
formElement.appendChild(submitButton);

rightDiv.appendChild(formElement);

main.appendChild(leftDiv);
main.appendChild(rightDiv);

const linkTag = document.getElementById('myLink');
linkTag.href = 'contact.css';

document.head.appendChild(linkTag);
}
export default loadContact;