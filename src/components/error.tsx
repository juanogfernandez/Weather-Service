import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function ErrorSpan() {
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
