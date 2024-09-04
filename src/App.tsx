import Header from "./components/header";
import SearchBar from "./components/search-bar";
import SearchButton from "./components/search-button";
import WeatherCard from "./components/weather-card";

function App() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex h-4/6 w-5/6">
          <div className="flex h-full w-1/2 items-center justify-center">
            <div className="h-3/4">
              <Header />
              <SearchBar />
              <SearchButton />
            </div>
          </div>
          <div className="flex h-full w-1/2 items-center justify-center">
            <div className="flex h-3/4">
              <WeatherCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
