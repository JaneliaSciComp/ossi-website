import { useEffect, useState } from "react";
import { getRandomImage } from "@utils/getRandomImage";
import heroImageFiles from "@data/heroImageFiles.json";
import { twMerge } from "tailwind-merge";

export default function Hero({
  title,
  subtitle,
  heightClasses,
  paddingClasses,
  captionAlignment,
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
        : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-images/${backgroundImg.file}')`,
    backgroundColor: backgroundImg === "" ? "#000" : "transparent",
  };

  return (
    <section
      className={twMerge(
        "relative bg-cover bg-no-repeat bg-center not-prose",
        heightClasses
      )}
      style={style}
    >
      <div
        className={twMerge(
          "flex flex-col min-h-full justify-around items-start mx-auto pt-20 max-w-screen-2xl px-6 md:px-20 lg:px-32",
          paddingClasses
        )}
      >
        <div>
          {title && (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tighter tracking-tighter mb-4 font-heading text-gray-200">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-lg sm:text-xl lg:text-2xl  text-white dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
        {children && (
          <div
            className={`max-w-3xl bg-blue-50 dark:bg-slate-900 bg-opacity-90 mb-4 md:mb-0 py-3 sm:py-6 lg:py-8 w-auto rounded-2xl`}
          >
            {children}
          </div>
        )}
        <p
          className={twMerge(
            "absolute bottom-0 max-auto text-xs text-white dark:text-slate-300",
            captionAlignment
          )}
        >
          {backgroundImg.alt}
        </p>
      </div>
    </section>
  );
}
