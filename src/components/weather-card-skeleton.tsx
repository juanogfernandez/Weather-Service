//import loading from "@/assets/loading.svg";

const WeatherCardSkeleton = () => (
  <div className="flex h-52 w-5/6 grow animate-pulse items-center justify-center rounded-br-[90px] rounded-tl-[90px] rounded-tr-2xl bg-gradient-to-bl from-[#e6e6ff] via-[#a8d0e0] to-[#e0ecee] p-2 shadow-[-3px_3px_2px_1px_#a6a6a6] md:w-5/6 md:rounded-r-full md:rounded-bl-[4700px] md:rounded-tl-full lg:h-60">
    {/* <img src={loading} className="w-10 animate-spin"></img> */}
  </div>
);

export default WeatherCardSkeleton;
