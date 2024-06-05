window.onload = function () {
  window.addEventListener("load", (event) => {
    // Get the last part of the URL path, to know what page we're on
    function getCurrentPageName() {
      let pathname = window.location.pathname;
      if (pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1); // Remove trailing slash if it exists
      }
      let pathParts = pathname.split("/").filter((part) => part !== "");
      return pathParts.length > 0
        ? pathParts[pathParts.length - 1]
        : "homepage";
    }

    let pageName = getCurrentPageName();

    // Track proposal PDF downloads
    document.querySelectorAll(".proposal-download").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (window.fathom) {
          fathom.trackEvent(`${pageName}: proposal download`);
        }
      });
    });

    // Track in-page GitHub README views
    document.querySelectorAll(".readme-tab").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (window.fathom) {
          fathom.trackEvent(`${pageName}: view in-page GitHub README`);
        }
      });
    });

    // Track clicks on embedded YT video
    document.querySelectorAll(".embedded-yt").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (window.fathom) {
          fathom.trackEvent(`${pageName}: view embedded YT video`);
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
            fathom.trackEvent(`${pageName}: mailto click to ${emailAddress}`);
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
              fathom.trackEvent(`${pageName}: click out to ${domainName}`);
            }
          }
        }
      });
    });
  });
};
