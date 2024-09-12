import { useDispatch } from "react-redux";
import { setLocation } from "@/features/location-slice";
import { useTranslation } from "react-i18next";

export default function SearchButton() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleClick() {
    const searchBar = document.getElementById(
      "location-searchbar",
    ) as HTMLInputElement;
    if (searchBar) {
      dispatch(setLocation(searchBar?.value.trim()));
    }
  }
  return (
    <div className="flex w-full items-center justify-center lg:items-start lg:justify-start">
      <button
        onClick={handleClick}
        className="mb-1 ml-1 mt-3 h-7 w-32 bg-[#1e6ef1] text-lg text-white shadow-[-5px_5px_0px_0px_#3b82f6] md:my-3 md:text-xl lg:ml-3"
      >
        {t("search-button")}
      </button>
    </div>
  );
}
