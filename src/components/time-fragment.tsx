import calendar from "/calendar.svg";

export default function TimeFragment() {
  return (
    <div className="flex flex-col">
      <img src={calendar} alt="Calendar" width={50} />
      <span>Mon, 2 Sep</span>
      <p>13:30</p>
      <p>Buenos Aires</p>
    </div>
  );
}
