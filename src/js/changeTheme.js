document.addEventListener("DOMContentLoaded", () => {
  const themeStyleSheet = document.getElementById("theme");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    themeStyleSheet.href = storedTheme;
  }

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    if (themeStyleSheet.href.includes("dark")) {
      console.log(true);
      themeStyleSheet.href = "/src/css/style-light.css";
    } else {
      themeStyleSheet.href = "/src/css/style-dark.css";
    }
    localStorage.setItem("theme", themeStyleSheet.href);
  });
});
