const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true);
console.log(aCopy)

aCopy.querySelector("h2").textContent = "Jonas"
aCopy.querySelector("p").textContent = "Hotpink";

const whosYourDaddy = document.querySelector("main");
whosYourDaddy.appendChild(aCopy)
