import { createSlice } from "@reduxjs/toolkit";

export type Scale = "C" | "F";

const initialState: Scale = "C";

// Slice de redux que permite manejar el estado de escala del store global de la app
// Se inicializa en escala Celsius como valor por defecto
const scaleSlice = createSlice({
  name: "scale",
  initialState,
  reducers: {
    // Se define acción de modificación del estado, basado en el payload de la acción
    setScale: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setScale } = scaleSlice.actions;

export default scaleSlice.reducer;
