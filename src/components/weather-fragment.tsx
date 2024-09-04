import sun from "/sun.svg";

export default function WeatherFragment() {
  return (
    <div className="flex flex-col bg-zinc-600">
      <img src={sun} alt="Sun" width={50} />
      <span>Sunny</span>
      <p>27°C</p>
      <p>Min 14° / Max 28°</p>
    </div>
  );
}
