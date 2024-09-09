import { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "@/assets/search-solid.svg?react";

export default function SearchBar() {
  const [locationSearch, setLocationSearch] = useState("");
  const {t, i18n} = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationSearch(event.currentTarget.value);
  };

  return (
    <div className="relative w-full">
      <input
        className="mb-3 h-9 w-full rounded-full border border-[#a6a6a6] p-3 text-xl text-[#636262] shadow-[0px_3px_0px_0px_#d9d9d9]"
        type="text"
        placeholder={t("search-placeholder")}
        id="location-searchbar"
        value={locationSearch}
        onChange={handleChange}
      />
      <SearchIcon className="color-[#0043af] absolute right-3 top-2 h-6 w-6" />
    </div>
  );
}
