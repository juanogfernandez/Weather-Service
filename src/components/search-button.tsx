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
      dispatch(setLocation(searchBar?.value));
    }
  }
  return (
    <div className="flex w-full justify-center md:justify-start">
      <button
        onClick={handleClick}
        className="my-0.5 md:my-3 ml-1 h-7 w-32 bg-[#1e6ef1] text-l md:text-xl text-white shadow-[-5px_5px_0px_0px_#3b82f6]"
      >
        {t("search-button")}
      </button>
    </div>
  );
}
