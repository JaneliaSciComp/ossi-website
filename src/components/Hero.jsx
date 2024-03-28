import { useEffect, useState } from "react";
import { getRandomImage } from "../utils/getRandomImage";
import { heroImageFiles } from "../../public/hero-images/heroImageFiles.js";

export default function Hero({
  baseUrl,
  title,
  subtitle,
  heightClasses,
  alignmentClasses,
  children,
}) {
  const [backgroundImg, setBackgroundImg] = useState("");

  useEffect(() => {
    if (backgroundImg === "") {
      const randomImageData = getRandomImage(heroImageFiles);
      setBackgroundImg(randomImageData);
    }
  }, []);

  const style = {
    backgroundImage:
      backgroundImg === ""
        ? "none"
        : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${baseUrl}/hero-images/${backgroundImg.file}')`,
    backgroundColor: backgroundImg === "" ? "#000" : "transparent",
  };

  return (
    <section
      className={`bg-cover bg-no-repeat bg-center relative flex flex-col justify-end 2xl:items-center 2xl:justify-center  not-prose ${heightClasses}`}
      style={style}
    >
      <div
        className={`flex flex-col 2xl:flex-row justify-between md:justify-around 2xl:items-center h-3/4 md:h-5/6 2xl:h-auto  2xl:w-11/12 ${alignmentClasses}`}
      >
        <div className="h-auto max-w-5xl px-4 md:px-12 lg:px-20 xl:px-32 2xl:pl-32 2xl:pr-0 2xl:self-start">
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
        {children && (
          <div
            className={`bg-blue-50 dark:bg-slate-900 bg-opacity-90 py-12 md:py-6 lg:py-20 w-auto lg:self-start md:mx-12 lg:ml-20 xl:ml-32 2xl:mx-20 md:rounded-2xl`}
          >
            {children}
          </div>
        )}
      </div>
      <p className="text-xs text-white  dark:text-slate-300 absolute right-6 bottom-0">
        {backgroundImg.alt}
      </p>
    </section>
  );
}
