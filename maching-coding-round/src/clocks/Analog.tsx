import { useEffect, useState } from "react";

interface ClockProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const Clock = ({ hours, minutes, seconds }: ClockProps) => {
  const secondsDegrees = seconds * 6 - 90;
  const minutesDegrees = minutes * 6 + seconds / 60 - 90;
  const hoursDegrees = minutesDegrees / 12 - 90;
  return (
    <div>
      {hours}:{minutes}:{seconds}
      <div
        style={
          {
            "--clock-radius": "150px",
            "--clock-hand-length": "calc(var(--clock-radius) / 2)",
          } as React.CSSProperties
        }
        className="w-[var(--clock-radius)] h-[var(--clock-radius)] rounded-full border-2 relative"
      >
        <p
          style={{
            top: "calc(50% - 8px)",
            left: "calc(var(--clock-radius) / 2)",
            transform: `rotate(${secondsDegrees}deg)`,
            transformOrigin: "left",
          }}
          className="w-[var(--clock-hand-length)] bg-red-500 h-1 absolute"
        ></p>
        <p
          style={{
            top: "calc(50% - 8px)",
            left: "calc(var(--clock-radius) / 2)",
            transform: `rotate(${minutesDegrees}deg)`,
            transformOrigin: "left",
            width: "calc(var(--clock-hand-length) - 20px)",
          }}
          className="w-[var(--clock-hand-length)] bg-green-600 h-1 absolute"
        ></p>
        <p
          style={{
            top: "calc(50% - 8px)",
            left: "calc(var(--clock-radius) / 2)",
            transform: `rotate(${hoursDegrees}deg)`,
            transformOrigin: "left",
            width: "calc(var(--clock-hand-length) - 30px)",
          }}
          className="bg-blue-500 h-1 absolute"
        ></p>
      </div>
    </div>
  );
};

const Analog = () => {
  // Implement to show the time in digital format after every second
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(Date.now()));
      // 100 ms to increase the precision
    }, 100);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <Clock
        hours={time.getHours()}
        minutes={time.getMinutes()}
        seconds={time.getSeconds()}
      />
    </div>
  );
};

export default Analog;
