const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");

const copyright = document.createElement("P");
copyright.innerHTML = "Curtis Clayton " + thisYear;
document.body.appendChild(copyright);