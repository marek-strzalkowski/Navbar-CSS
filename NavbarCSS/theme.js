const themes = {
  dark: "light",
  light: "dark"
};

const theme = localStorage.getItem('theme') || (tmp = Object.keys(themes)[0], localStorage.setItem('theme', tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themes[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;
document.getElementById('themeButtonMain').onclick = toggleTheme;
document.getElementById("themeButtonMain").style.cursor = "pointer"; 