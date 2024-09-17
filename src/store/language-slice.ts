import { createSlice } from "@reduxjs/toolkit";

export type Language = "es" | "en";

const initialState: Language = "es";

// Slice de redux que permite manejar el estado de lenguaje del store global de la app
// Se inicializa con lenguaje español como valor por defecto
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    // Se define acción de modificación del estado, basado en el payload de la acción
    setLanguage: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
