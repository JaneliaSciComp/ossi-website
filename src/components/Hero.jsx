import { useEffect, useState } from "react";
import { getRandomImage } from "../utils/getRandomImage";
import { heroImageFiles } from "../../public/hero-images/heroImageFiles.js";

export default function Hero({
  baseUrl,
  title,
  subtitle,
  customClasses,
  children,
}) {
  const [backgroundImg, setBackgroundImg] = useState("");
  useEffect(() => {
    if (backgroundImg === "") {
      const randomImageData = getRandomImage(heroImageFiles);
      setBackgroundImg(randomImageData);
    }
  }, []);

  return (
    <section
      className={`${customClasses} bg-cover bg-no-repeat bg-center relative flex flex-col justify-end 2xl:items-center 2xl:justify-center  not-prose`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${baseUrl}/hero-images/${backgroundImg.file}')`,
      }}
    >
      <div className="flex flex-col 2xl:flex-row justify-around 2xl:items-center h-5/6 2xl:h-auto 2xl:w-11/12">
        <div className="max-w-5xl px-4 md:px-12 lg:px-20 xl:px-32 2xl:pl-32 2xl:pr-0 2xl:self-start">
          {title && (
            <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tighter tracking-tighter mb-4 font-heading text-gray-200">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-xl lg:text-2xl  text-white dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
        <div className="2xl:bg-slate-600 2xl:bg-opacity-50 2xl:py-20 2xl:mx-20 rounded-2xl">
          {children}
        </div>
      </div>
      <p className="text-xs text-white mb-6 dark:text-slate-300 absolute right-6 -bottom-6">
        {backgroundImg.alt}
      </p>
    </section>
  );
}
