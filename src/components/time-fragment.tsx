import calendar from "/calendar.svg";

export default function TimeFragment() {
  return (
    <div className="flex h-full w-auto flex-col items-center justify-center">
      <div className="text-l mb-2 flex h-1/4 w-full items-center justify-center">
        <img className="mx-2" src={calendar} alt="Calendar" width={35} />
        <span className="mx-2">Mon, 2 Sep</span>
      </div>
      <p className="h-2/4 text-7xl font-bold">13:30</p>
      <p className="text-l h-1/4">Buenos Aires</p>
    </div>
  );
}
