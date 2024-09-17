import { Provider } from "react-redux";
import { store } from "@/store/store";
import Layout from "@/components/common/layout";
import WeatherSection from "@/components/common/weather-section";

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
