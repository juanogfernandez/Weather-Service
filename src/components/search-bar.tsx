import { useState } from "react";
import { useTranslation } from "react-i18next";
import searchIcon from "@/assets/search-solid.svg";
import { useDispatch } from "react-redux";
import { setLocation } from "@/features/location-slice";

export default function SearchBar() {
  const [locationSearch, setLocationSearch] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Función que maneja el cambio de estado local de locación del componente
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLocationSearch(event.currentTarget.value);
  };

  // Función que envía cambio de locación al store al apretar enter
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      dispatch(setLocation(locationSearch.trim()));
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative flex max-w-sm grow items-center justify-center md:max-w-lg lg:max-w-full">
        <input
          className="my-2 h-7 min-w-64 max-w-full grow rounded-full border border-[#a6a6a6] p-3 text-lg text-[#636262] shadow-[0px_3px_0px_0px_#d9d9d9] focus:border-2 focus:border-stone-500 focus:outline-none md:h-9 md:w-full md:text-xl lg:w-52 lg:text-lg"
          type="text"
          // Traducción de placeholder
          placeholder={t("search-placeholder")}
          id="location-searchbar"
          value={locationSearch}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <img
          src={searchIcon}
          className="absolute right-3 top-3 h-5 md:h-6 md:w-6 lg:top-4"
        />
      </div>
    </div>
  );
}
