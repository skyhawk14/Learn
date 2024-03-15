import { useCallback, useEffect, useRef, useState } from "react";
const log = console.log;

const SimpleProgressBar = () => {
  const progress = useRef<number>(0);
  const [state, setState] = useState<number>(0);
  const interval = useRef<any>(null);

  const startTimer = useCallback(() => {
    log("starting timer");
    interval.current = setInterval(() => {
      log("progress current", progress.current);
      if (progress.current <= 100) {
        progress.current = progress.current + 10;
        setState(progress.current);
      } else {
        setState(100);
        log("clearing interval");
        clearInterval(interval.current);
      }
    }, 1000);
  }, []);

  const stopHandler = useCallback(() => {
    log("clearing interval");
    clearInterval(interval.current);
  }, []);

  const restartHandler = function () {
    progress.current = 0;
    setState(0);
    clearInterval(interval.current);
    startTimer();
  };

  // useEffect(() => {
  //   return () => {
  //     log("clearing interval in cleanup");
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <>
      <div className="w-full h-[20px] bg-slate-900 mt-2">
        <div
          className="h-full bg-green-500"
          style={{ width: `${state}%`, transition: "width 1s" }}
        ></div>
      </div>
      <div className="mt-2 flex gap-2">
        <button className="border-2 p-2 cursor-pointer" onClick={startTimer}>
          Start
        </button>
        <button className="border-2 p-2 cursor-pointer" onClick={stopHandler}>
          Stop
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={restartHandler}
        >
          Restart
        </button>
      </div>
    </>
  );
};

export default SimpleProgressBar;
