import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import temperature from "@/assets/temperature.svg";
import translation from "@/assets/translation.svg";
import { setLanguage } from "@/features/language-slice";
import { setScale } from "@/features/scale-slice";
import "@/i18n";
import { useTranslation } from "react-i18next";

export default function SwitchBar() {
  const scale = useSelector((state: RootState) => state.scale);
  const language = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  function switchLanguage() {
    const alternativeLanguage = language === "es" ? "en" : "es";
    dispatch(setLanguage(alternativeLanguage));
    i18n.changeLanguage(alternativeLanguage);
  }

  function switchScale() {
    const alternativeScale = scale === "C" ? "F" : "C";
    dispatch(setScale(alternativeScale));
  }

  return (
    <div className="flex w-5/6 justify-end">
      <div className="w-30 flex justify-around">
        <button
          className="mr-5 flex w-1/2 items-center justify-center"
          onClick={switchScale}
        >
          <img className="w-7" src={temperature}></img>
          <span className="mx-1 text-center text-xl font-semibold text-[#636262]">
            {scale}
          </span>
        </button>
        <button
          className="flex w-1/2 items-center justify-center"
          onClick={switchLanguage}
        >
          <img className="w-7" src={translation}></img>
          <span className="mx-1 text-center text-xl font-semibold uppercase text-[#636262]">
            {language}
          </span>
        </button>
      </div>
    </div>
  );
}
