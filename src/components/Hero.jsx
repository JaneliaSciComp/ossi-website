import { useEffect, useState } from "react";
import { getRandomImage } from "../utils/getRandomImage";
import { heroImageFiles } from "../data/heroImageFiles.js";
console.log("hero image files:", heroImageFiles);

export default function Hero({ baseUrl, title, subtitle }) {
  const [backgroundImg, setBackgroundImg] = useState("");
  useEffect(() => {
    if (backgroundImg === "") {
      const randomImageData = getRandomImage(heroImageFiles);
      setBackgroundImg(randomImageData);
    }
  }, []);
  console.log(backgroundImg);

  return (
    <section
      className="bg-cover bg-no-repeat relative md:-mt-[76px] not-prose"
      style={{
        backgroundImage: `url('${baseUrl}/hero-images/${backgroundImg.file}')`,
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
      <p className="text-xs text-white mb-6 dark:text-slate-300 absolute right-6 -bottom-6">
        {backgroundImg.alt}
      </p>
    </section>
  );
}
