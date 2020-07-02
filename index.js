let menu = null;
document.addEventListener("DOMContentLoaded", function () {
  menu = document.querySelector(".menu");
  menu.classList.add("off");

  let row = document.getElementById("row");
  row.addEventListener("contextmenu", showmenu);

  menu.addEventListener("mouseleave", hidemenu);

  addMenuListeners();
});

function addMenuListeners() {
  console.log("CINQUE TERRE");
  console.log("ALGARVE");
  console.log("GOLD COAST");
  console.log("AMALFI");
}

function showmenu(ev) {
  ev.preventDefault();
  menu.style.top = `${ev.clientY - 20}px`;
  menu.style.left = `${ev.clientX - 20}px`;
  menu.classList.remove("on");
}

function hidemenu(ev) {
  menu.classList.add("off");
  menu.style.top = "-200%";
  menu.style.left = "-200%";
}
