let icon = document.querySelector("#icon");
let mainlogo = document.querySelector(".logo");
let mainlogoD = document.querySelector(".logo-dark");
let footer = document.querySelector("footer");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("fas", "fa-moon");
    icon.classList.add("fas", "fa-sun");
    mainlogo.style.display = "none";
    mainlogoD.style.display = "block";
    localStorage.setItem('isDarkMode', true);
  } else {
    icon.classList.remove("fas", "fa-sun");
    icon.classList.add("fas", "fa-moon");
    mainlogo.src = "img/logo.svg";
    mainlogo.style.display = "block";
    mainlogoD.style.display = "none";
    localStorage.setItem('isDarkMode', false);
  }
};

if (localStorage.getItem('isDarkMode') === 'true') {
  document.body.classList.add('dark-theme');
  icon.classList.remove("fas", "fa-moon");
  icon.classList.add("fas", "fa-sun");
  mainlogo.style.display = "none";
  mainlogoD.style.display = "block";
  localStorage.setItem('isDarkMode', true);
} 
