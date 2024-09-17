import i18next from "i18next";

// Se utiliza una función porque el hook de translation de i18next no puede ser utilizado por fuera de componentes de React
export const retrieveTranslation = (key: string) => {
  return i18next.t(key);
};
