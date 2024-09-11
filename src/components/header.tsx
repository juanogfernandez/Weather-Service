import { useTranslation } from "react-i18next";
export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="my-1 w-auto text-center text-4xl font-bold md:text-7xl">
          Weather Service
        </h1>
        {/* <img></img> */}
      </div>
      <div>
        <p className="flex mb-2 md:mb-3 text-[18px] w-64 text-[#636262] md:text-2xl text-wrap text-center">
          {t("header-info")}
        </p>
      </div>
    </>
  );
}
