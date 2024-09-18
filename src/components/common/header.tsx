import { useTranslation } from "react-i18next";

// Componente que contiene título y bajada
export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center lg:items-start lg:justify-start">
        <h1 className="animatecss animatecss-fadeInUp my-1 w-full text-center text-4xl font-bold md:mt-4 md:text-6xl lg:text-left lg:text-[42px] xl:text-5xl">
          Weather Service
        </h1>
        {/* <img></img> */}
        <span className="animatecss animatecss-fadeInUp animatecss-delay-1s mb-2 w-64 text-wrap text-center text-[18px] text-[#636262] md:my-3 md:w-full md:text-xl lg:w-full lg:text-left lg:text-lg">
          {/* Traducción de bajada */}
          {t("header-info")}
        </span>
      </div>
    </>
  );
}
