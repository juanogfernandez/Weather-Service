import { Provider } from "react-redux";
import { store } from "@/store";
import Header from "@/components/header";
import SearchBar from "@/components/search-bar";
import SearchButton from "@/components/search-button";
import WeatherCard from "@/components/weather-card";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex h-screen w-full items-center justify-center antialiased">
          <div className="flex h-2/3 min-h-52 w-2/3">
            <div className="flex h-full w-1/2 flex-col items-center justify-center p-3">
              <Header />
              <SearchBar />
              <SearchButton />
            </div>
            <div className="flex h-full w-1/2 items-center justify-center p-3">
              <WeatherCard />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
