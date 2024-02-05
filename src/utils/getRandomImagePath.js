export function getRandomImagePath(placeholderImages) {
  const imagePaths = Object.keys(placeholderImages);
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  const randomPath = imagePaths[randomIndex];
  return randomPath;
}
