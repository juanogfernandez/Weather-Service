import { useTranslation } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full">
      <h1 className="my-2 text-7xl font-bold">Weather Service</h1>
      <h2>{t("welcome")}</h2>
      <p className="mb-3 text-2xl text-[#636262]">{t("header-info")}</p>
    </div>
  );
}
