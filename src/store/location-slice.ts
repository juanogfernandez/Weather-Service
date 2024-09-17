import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  value: string;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: LocationState = {
  value: "",
  error: null,
  status: "idle",
};

// Slice de redux que permite manejar el estado de locación del store global de la app
// Al involucrar respuesta de api, se agrega error y estado de la consulta además del valor del estado
// Se inicializa en valores vacíos y estáticos
export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // Se define acción de modificación del estado en general, basado en el payload de la acción según el caso
    setLocation: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    setLocationLoading: (state) => {
      state.status = "loading";
      state.error = null;
    },
    setLocationError: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  setLocation,
  setLocationLoading,
  setLocationError,
} = locationSlice.actions;

export default locationSlice.reducer;
