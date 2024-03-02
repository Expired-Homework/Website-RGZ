let darkModeSetting = localStorage.getItem("darkMode");
const darkModeButton = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.querySelector("#dark-mode-toggle > img");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
  darkModeIcon.src =
    document.head.baseURI + "/../assets/icons/night-mode-light.png";
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
  console.log(document.head.baseURI);
  darkModeIcon.src = document.head.baseURI + "/../assets/icons/night-mode.png";
};

if (darkModeSetting == "enabled") {
  enableDarkMode();
}

darkModeButton.addEventListener("click", () => {
  darkModeSetting = localStorage.getItem("darkMode");
  if (darkModeSetting !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
