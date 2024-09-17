import { useSelector } from "react-redux";
import { RootState } from "@/store";

// Componente que renderiza errores
export default function ErrorSpan() {
  // Suscripción al store de Redux utilizando el hook useSelector de React-Redux
  // Al existir algún cambio en el estado del store, se re-renderiza.
  // Se podría sintetizar las variables location y weather en una sola utilización del hook, para evitar re-renderizaciones
  const location = useSelector(
    (state: RootState) => state.location,
  );
  const weather = useSelector(
    (state: RootState) => state.weather,
  );

  return (
    <>
      {location.error && (
        <div className="mt-4 flex h-10 items-center justify-center rounded border border-red-400 bg-red-100 text-red-700 opacity-70">
          <div className="flex h-full w-auto items-center justify-center p-2">
            <span className="w-auto text-sm font-medium">
              {location.error}
            </span>
          </div>
        </div>
      )}
      {weather.error && (
        <div className="mt-4 flex h-10 items-center justify-center rounded border border-red-400 bg-red-100 text-red-700 opacity-70">
          <div className="flex h-full w-auto items-center justify-center p-2">
            <span className="w-auto text-sm font-medium">
              {weather.error}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
