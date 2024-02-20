import { useEffect, useState } from "react";
import { getRandomImage } from "../utils/getRandomImage";

const heroImages = [
  "ExM-data-VVD-Viewer-1.png",
  "ExM-data-VVD-Viewer-2.png",
  "manc-dorsal-neuVid.png",
  "Mouse-brain-neuVid.png",
  "neuVid.png",
];

export default function Hero({ baseUrl, title, subtitle }) {
  const [backgroundImg, setBackgroundImg] = useState("");
  useEffect(() => {
    backgroundImg === "" && setBackgroundImg(getRandomImage(heroImages));
  }, []);
  console.log(backgroundImg);

  return (
    <section
      className="bg-cover bg-no-repeat relative md:-mt-[76px] not-prose"
      style={{
        backgroundImage: `url('${baseUrl}/hero-images/${backgroundImg}')`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div className="py-12 md:py-20">
          <div className="pb-10 md:pb-16 max-w-5xl">
            {title && (
              <h1 className="text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading text-gray-200">
                {title}
              </h1>
            )}
            <div className="max-w-3xl">
              {subtitle && (
                <p className="text-xl text-white mb-6 dark:text-slate-300">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
