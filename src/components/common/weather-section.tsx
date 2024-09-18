import Header from "@/components/common/header";
import SearchBar from "@/components/ui/search-bar";
import SearchButton from "@/components/ui/search-button";
import WeatherCard from "@/components/weather-card/weather-card";

export default function WeatherSection() {
  return (
    <div className="mt-7 flex h-2/3 w-5/6 flex-col items-center justify-center lg:flex-row xl:w-2/3">
      <div className="my-3 flex w-full flex-col items-center justify-center p-3 lg:mr-3 lg:w-1/2 xl:items-end">
        <div className="flex min-w-[24rem] flex-col items-center justify-center xl:w-3/4">
          <Header />
          <SearchBar />
          <SearchButton />
        </div>
      </div>
      <div className="my-3 flex w-full items-center justify-center p-3 lg:ml-3 lg:w-1/2 xl:justify-start">
        <WeatherCard />
      </div>
    </div>
  );
}
