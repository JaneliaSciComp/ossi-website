function attachEvent(selector, event, fn) {
  const matches = document.querySelectorAll(selector)
  if (matches && matches.length) {
    matches.forEach((elem) => {
      elem.addEventListener(event, (e) => fn(e, elem), false);
    });
  }
}

window.onload = function () {
    let lastKnownScrollPosition = window.scrollY;
    let ticking = true;

    attachEvent('#header nav', 'click', function () {
      document.querySelector("[data-aw-toggle-menu]")?.classList.remove("expanded");
      document.body.classList.remove("overflow-hidden");
      document.getElementById("header").classList.remove("h-screen");
      document.getElementById("header").classList.remove("expanded");
      document.getElementById("header").classList.remove("bg-page");
      document.querySelector("#header nav").classList.add("hidden");
      document.querySelector("#header > div > div:last-child")?.classList.add("hidden");
    });

    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {
      elem.classList.toggle("expanded");
      document.body.classList.toggle("overflow-hidden");
      document.getElementById("header").classList.toggle("h-screen");
      document.getElementById("header").classList.toggle("expanded");
      document.getElementById("header").classList.toggle("bg-page");
      document.querySelector("#header nav").classList.toggle("hidden");
      document.querySelector("#header > div > div:last-child")?.classList.toggle("hidden");
    });

    // function appyHeaderStylesOnScroll() {
    //   const header = document.getElementById('header');
    //   if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {
    //     document.getElementById('header').classList.add('scroll');
    //   } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {
    //     document.getElementById('header').classList.remove('scroll');
    //   }
    //   ticking = false;
    // }
    // appyHeaderStylesOnScroll();

    // attachEvent([document], 'scroll', function () {
    //   lastKnownScrollPosition = window.scrollY;

    //   if (!ticking) {
    //     window.requestAnimationFrame(() => {
    //       appyHeaderStylesOnScroll();
    //     });
    //     ticking = true;
    //   }
    // });
  };