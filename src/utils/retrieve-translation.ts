import i18next from "i18next";

export const retrieveTranslation = (key: string) => {
  return i18next.t(key);
};
