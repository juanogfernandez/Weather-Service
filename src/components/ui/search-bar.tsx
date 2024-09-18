import { useDispatch } from "react-redux";
import { setLocation } from "@/store/location-slice";
import { useTranslation } from "react-i18next";

type SearchBarProps = {
  locationSearch: string;
  setLocationSearch: React.Dispatch<
    React.SetStateAction<string>
  >;
};
export default function SearchBar({
  locationSearch,
  setLocationSearch,
}: SearchBarProps) {
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
      setLocationSearch("");
    }
  };

  const handleClick = () => {
    dispatch(setLocation(locationSearch.trim()));
    setLocationSearch("");
  };
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative flex items-center justify-center animatecss animatecss-delay-2s animatecss-fadeInLeft md:max-w-lg md:max-w-md md:grow lg:max-w-full">
        <input
          className="my-2 h-7 min-w-64 max-w-full grow rounded-full border border-[#a6a6a6] p-3 text-lg text-[#636262] shadow-[0px_3px_0px_0px_#d9d9d9] focus:border-2 focus:border-stone-500 focus:outline-none md:h-9 md:w-full md:text-lg lg:w-52"
          type="text"
          // Traducción de placeholder
          placeholder={t("search-placeholder")}
          id="location-searchbar"
          value={locationSearch}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <img
          src="/assets/search-solid.svg"
          className="rotate-animation absolute right-3 top-3 h-5 cursor-pointer hover:scale-110 md:h-6 md:w-6"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
