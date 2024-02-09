import { test } from "@playwright/test";

// https://www.youtube.com/watch?app=desktop&v=rB-reVM-28M
test("find broken images", async ({ page }) => {
  await page.goto("/ossi-website");
  // Enable network interception
  await page.route("/**", (route) => {
    route.continue().catch(() => {});
  });
  // Use page.evaluate to identify Images and count broken images
  const brokenImages = await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll("img"));
    const brokenImagesList = [];
    for (let image of images) {
      const response = await fetch(image.src, { method: "GET" }).catch(
        () => null
      );
      if (!response || response.status !== 200) {
        brokenImagesList.push(image.src);
      }
    }
    return brokenImagesList;
  });
  // Print broken image details
  console.log(`Total broken images: ${brokenImages.length}`);
  console.log("Broken image names:");
  for (let src of brokenImages) {
    console.log(src);
  }
});
// This is going to the homepage and checking whether it can fetch all the images.
// It is failing on the blog page image, which is generated using the Astro <Image> component
// It seems to be because the href is encoded with % symbols?
// npx playwright test -g "broken images" --ui
