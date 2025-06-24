// assets/js/navbar.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/includes/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });
});
