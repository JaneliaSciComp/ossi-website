document.addEventListener("DOMContentLoaded", function () {
  // Track proposal PDF views
  document.querySelectorAll(".proposal-download").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (window.fathom) {
        fathom.trackEvent(`View proposal PDF`);
      }
    });
  });

  // Track in-page GitHub README views
  document.querySelectorAll(".readme-tab").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (window.fathom) {
        fathom.trackEvent(`View in-page GitHub README`);
      }
    });
  });

  // Track clicks on embedded YT video
  document.querySelectorAll(".embedded-yt").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (window.fathom) {
        fathom.trackEvent(`Play embedded YT video`);
      }
    });
  });

  // Track all external link clicks
  document.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", (event) => {
      let href = item.getAttribute("href");

      if (href.startsWith("mailto:")) {
        // Track mailto link clicks
        let emailAddress = href.substring(7); // Extract email address from mailto link
        if (window.fathom) {
          fathom.trackEvent(`Mailto click to ${emailAddress}`);
        }
      } else {
        // Handle regular links
        let linkUrl = new URL(href, window.location.href); // Using the second argument to handle relative URLs
        let currentHostname = window.location.hostname;
        if (linkUrl.hostname !== currentHostname) {
          // If the link's hostname is different from the current page's hostname
          let domainParts = linkUrl.hostname.split(".");

          let domainName =
            domainParts.length > 1
              ? domainParts[domainParts.length - 2]
              : domainParts[0];
          if (window.fathom) {
            fathom.trackEvent(`Click out to ${domainName}`);
          }
        }
      }
    });
  });
});
