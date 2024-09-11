//import loading from "@/assets/loading.svg";

const WeatherCardSkeleton = () => (
  <div className="mb-3 flex h-60 w-full animate-pulse items-center justify-center rounded-bl-[4700px] rounded-br-full rounded-tl-full rounded-tr-full bg-gradient-to-bl from-[#d0d0f8] via-[#76adbe] to-[#c8d9dc] opacity-70 shadow-[-3px_3px_2px_1px_#a6a6a6]">
    {/* <img src={loading} className="w-10 animate-spin"></img> */}
  </div>
);

export default WeatherCardSkeleton;
