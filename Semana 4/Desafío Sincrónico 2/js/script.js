const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];
let container = document.getElementById("container");

function showNames (array) {

  let contentHTML = "";

  for (let i = 0; i < array.length; i++) {
  
    let nameList = array[i];
    contentHTML += `
      <p> ${nameList.name} ${nameList.lastname}</p>
    `
  };

  container.innerHTML = contentHTML;
}

document.addEventListener("DOMContentLoaded", ()=> {
  showNames(DATA);
})
