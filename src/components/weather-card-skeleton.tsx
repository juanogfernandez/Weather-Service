import loading from "@/assets/loading.svg";

const WeatherCardSkeleton = () => (
  <div className="relative flex h-52 w-80 max-w-xs grow animate-pulse items-center justify-center rounded-bl-lg rounded-br-[70px] rounded-tl-[90px] rounded-tr-2xl bg-gradient-to-bl from-[#e6e6ff] via-[#a8d0e0] to-[#e0ecee] p-2 shadow-[-3px_3px_2px_1px_#a6a6a6] md:max-w-md md:rounded-br-[90px] lg:h-60">
    <img
      src={loading}
      className="absolute right-4 top-3 w-4 animate-spin"
    ></img>
  </div>
);

export default WeatherCardSkeleton;
