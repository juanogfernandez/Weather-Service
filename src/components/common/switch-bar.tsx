import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getWeatherData } from "@/store/weather-slice";
import { setLanguage } from "@/store/language-slice";
import { setScale } from "@/store/scale-slice";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import { selectSwitchBarData } from "@/store/selector";
// Componente que permite cambio de escala y/o lenguaje
export default function SwitchBar() {
  // Suscripción al store de Redux utilizando el hook useSelector de React-Redux
  // Al existir algún cambio en el estado del store, se re-renderiza.
  const { scale, language, location } = useSelector(
    selectSwitchBarData,
  );

  const dispatch = useDispatch<AppDispatch>();
  const { i18n } = useTranslation();

  // Función que hace switch a lenguaje alternativo
  function switchLanguage() {
    const alternativeLanguage = language === "es" ? "en" : "es";
    dispatch(setLanguage(alternativeLanguage));
    i18n.changeLanguage(alternativeLanguage);

    /* 
    Cambio de lenguaje vuelve a realizar consulta a api de clima,
    para traer leyenda de condición climática en idioma requerido
    y delegar esa leyenda en la api, en lugar de traducir cada leyenda
    */
    if (location.value) {
      dispatch(
        getWeatherData(location.value, alternativeLanguage),
      );
    }
    //i18n.changeLanguage(alternativeLanguage).then(() => {
    //  localStorage.setItem("i18nextLng", alternativeLanguage);
    //});
  }

  // Función que hace switch a escala alternativa
  function switchScale() {
    const alternativeScale = scale === "C" ? "F" : "C";
    dispatch(setScale(alternativeScale));
  }

  return (
    <div className="my-3 flex w-5/6 justify-end animatecss animatecss-delay-2s animatecss-slideInRight">
      <div className="w-30 flex justify-around">
        <button
          className="mr-2 flex w-1/2 items-center justify-center transition duration-200 hover:scale-110 md:mr-5"
          onClick={switchScale}
        >
          <img
            className="w-6 md:w-7"
            src="/assets/temperature.svg"
          ></img>
          <span className="mx-1 text-center text-lg font-semibold text-[#636262] md:text-xl">
            {scale}
          </span>
        </button>
        <button
          className="flex w-1/2 items-center justify-center transition duration-200 hover:scale-110"
          onClick={switchLanguage}
        >
          <img
            className="w-6 md:w-7"
            src="/assets/translation.svg"
          ></img>
          <span className="mx-1 text-center text-lg font-semibold uppercase text-[#636262] md:text-xl">
            {language}
          </span>
        </button>
      </div>
    </div>
  );
}
