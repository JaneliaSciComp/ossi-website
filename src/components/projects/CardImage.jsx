import { useState, useEffect } from "react";
import { getRandomImage } from "../../utils/getRandomImage";

export default function ContentCardImage({ baseUrl, imageSrc }) {
  const placeholderProjectImages = [
    "Bg0Geue-cY8",
    "f4pUuCc3M0g",
    "OqtafYT5kTw",
  ];
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    !imageSrc && setRandomImage(getRandomImage(placeholderProjectImages));
  }, []);

  return imageSrc ? (
    <img
      src={`${baseUrl}/project-images/${imageSrc}`}
      className="w-full h-40 object-cover object-center"
      loading="lazy"
    />
  ) : (
    <img
      src={`https://source.unsplash.com/${randomImage}`}
      className="w-full h-40 object-cover object-center"
      loading="lazy"
    />
  );
}
