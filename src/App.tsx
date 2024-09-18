import { Provider } from "react-redux";
import { store } from "@/store/store";
import Layout from "@/components/common/layout";
import MainSection from "@/components/common/main-section";

function App() {
  return (
    <>
      {/*  Store de Redux como contexto para toda la app*/}
      <Provider store={store}>
        <Layout>
          <MainSection />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
