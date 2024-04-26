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
      src={`https://source.unsplash.com/${randomImage}`}
      className="w-full h-40 object-cover object-center"
      loading="lazy"
    />
  );
}
