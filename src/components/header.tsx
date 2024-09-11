import { useTranslation } from "react-i18next";
export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center lg:items-start lg:justify-start">
        <h1 className="my-1 w-full text-center text-4xl font-bold md:text-7xl lg:text-left lg:text-[42px] xl:text-5xl">
          Weather Service
        </h1>
        {/* <img></img> */}
        <span className="mb-2 w-64 text-wrap text-center text-[18px] text-[#636262] md:my-3 md:w-full md:text-2xl lg:w-full lg:text-left lg:text-lg">
          {t("header-info")}
        </span>
      </div>
    </>
  );
}
