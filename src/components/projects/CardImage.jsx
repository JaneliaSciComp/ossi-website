import { useState, useEffect } from "react";
import { getRandomImage } from "../../utils/getRandomImage";

export default function ContentCardImage() {
  const placeholderProjectImages = [
    "Bg0Geue-cY8",
    "f4pUuCc3M0g",
    "OqtafYT5kTw",
  ];
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    setRandomImage(getRandomImage(placeholderProjectImages));
  }, []);

  return (
    <img
      src={`/project-images/${randomImage}-unsplash.jpg`}
      className="w-full h-40 object-cover object-center"
      loading="lazy"
    />
  );
}
