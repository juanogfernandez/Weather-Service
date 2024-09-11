import { Provider } from "react-redux";
import { store } from "@/store";
import Header from "@/components/header";
import SearchBar from "@/components/search-bar";
import SearchButton from "@/components/search-button";
import WeatherCard from "@/components/weather-card";
import SwitchBar from "@/components/switch-bar";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex h-screen w-full flex-col items-center justify-center antialiased">
          <SwitchBar />
          <div className="flex h-2/3 w-5/6 flex-row flex-col">
            <div className="my-6 flex flex-col items-center justify-center p-1 md:w-1/2">
              <Header />
              <SearchBar />
              <SearchButton />
            </div>
            <div className="my-6 flex items-center justify-center p-1 md:w-1/2">
              <WeatherCard />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
