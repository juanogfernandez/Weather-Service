import { Provider } from "react-redux";
import { store } from "@/store";
import Layout from "@/components/layout";
import WeatherSection from "@/components/weather-section";

function App() {
  return (
    <>
      {/*  Store de Redux como contexto para toda la app*/}
      <Provider store={store}>
        <Layout>
          <WeatherSection />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
