const currentyear = document.querySelector("#currentyear");

const lastmodified = document.querySelector("#lastmodified");

currentyear.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = Last Modification: ${document.lastmodified};
const now = new Date();
const fullDate = now.toLocaleString();