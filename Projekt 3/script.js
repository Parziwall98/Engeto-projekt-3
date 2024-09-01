const modeToggleCheckbox = document.getElementById("mode-toggle");
const body = document.body;
function saveModeToLocalStorage(isDarkMode) {
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}
function loadModeFromLocalStorage() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    body.classList.add("dark-mode");
    modeToggleCheckbox.checked = true;
  } else {
    body.classList.remove("dark-mode");
    modeToggleCheckbox.checked = false;
  }
}
modeToggleCheckbox.addEventListener("change", () => {
  const isDarkMode = body.classList.toggle("dark-mode");
  saveModeToLocalStorage(isDarkMode);
});
loadModeFromLocalStorage();

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    if (password === confirmPassword) {
      errorMessage.textContent = "";
      successMessage.textContent = "Hesla se shodují. Formulář odeslán!";
    } else {
      successMessage.textContent = "";
      errorMessage.textContent = "Hesla se neshodují. Zkuste to znovu.";
    }
  });

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  console.log("Bylo kliknuto");
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
