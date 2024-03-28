// function applyHeaderStylesOnLoad() {
//   if (window.scrollY > 60) {
//     header.classList.add('scroll');
//   } else {
//     header.classList.remove('scroll');
//   }
// }

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

const initTheme = function () {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
};
initTheme();

function attachEvent(selector, event, fn) {
  const matches = document.querySelectorAll(selector);
  if (matches && matches.length) {
    matches.forEach((elem) => {
      elem.addEventListener(event, (e) => fn(e, elem), false);
    });
  }
}

window.onload = function () {
  // const header = document.querySelector('#header[data-sticky-header]');
  // applyHeaderStylesOnLoad();
  // window.addEventListener('scroll', applyHeaderStylesOnLoad);

  attachEvent("#header nav", "click", function () {
    document
      .querySelector("[data-aw-toggle-menu]")
      ?.classList.remove("expanded");
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header").classList.remove("h-screen");
    document.getElementById("header").classList.remove("expanded");
    document.getElementById("header").classList.remove("bg-page");
    document.querySelector("#header nav").classList.add("hidden");
    document
      .querySelector("#header > div > div:last-child")
      ?.classList.add("hidden");
  });

  attachEvent("[data-aw-toggle-menu]", "click", function (_, elem) {
    elem.classList.toggle("expanded");
    document.body.classList.toggle("overflow-hidden");
    document.getElementById("header").classList.toggle("h-screen");
    document.getElementById("header").classList.toggle("expanded");
    document.getElementById("header").classList.toggle("bg-page");
    document.querySelector("#header nav").classList.toggle("hidden");
    document
      .querySelector("#header > div > div:last-child")
      ?.classList.toggle("hidden");
  });

  attachEvent("[data-toggle-color-scheme]", "click", function () {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });
};
