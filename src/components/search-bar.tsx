import { useState } from "react";
import { useTranslation } from "react-i18next";
import searchIcon from "@/assets/search-solid.svg";

export default function SearchBar() {
  const [locationSearch, setLocationSearch] = useState("");
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationSearch(event.currentTarget.value);
  };

  return (
    <div className="relative w-full">
      <input
        className="my-2 h-7 md:h-9 w-full rounded-full border border-[#a6a6a6] p-3 text-l md:text-xl text-[#636262] shadow-[0px_3px_0px_0px_#d9d9d9]"
        type="text"
        placeholder={t("search-placeholder")}
        id="location-searchbar"
        value={locationSearch}
        onChange={handleChange}
      />
      <img
        src={searchIcon}
        className="absolute right-3  md:top-2 top-3 md:h-6 h-5 md:w-6"
      />
    </div>
  );
}
