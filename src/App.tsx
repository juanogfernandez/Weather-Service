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
        <div className="flex h-dvh w-full flex-col items-center justify-center antialiased">
          <SwitchBar />
          <div className="flex h-2/3 w-5/6 flex-col lg:w-3/4 lg:flex-row xl:w-2/3">
            <div className="my-6 flex w-full flex-col items-center justify-center p-3 lg:w-1/2">
              <Header />
              <SearchBar />
              <SearchButton />
            </div>
            <div className="my-3 flex items-center justify-center p-3 lg:w-1/2">
              <WeatherCard />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
