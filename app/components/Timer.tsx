// export default Timer;

import React, { useCallback, useEffect, useState, useRef } from "react";
import moment from "moment-timezone"; // Make sure to install moment-timezone

const CountdownBox = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col gap-5 relative items-center justify-center">
      <div className="h-16 w-16 sm:w-18 sm:h-18 lg:w-32 lg:h-32 flex justify-center items-center relative bg-transparent rounded-lg border-4 border-teal-300 border-blue-500">
        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
          {value}
        </span>
      </div>
      <span className="text-white text-xs sm:text-2xl text-center capitalize">
        {Number(value) === 1 ? label.slice(0, -1) : label}
      </span>
    </div>
  );
};

const Timer = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calculateCountdown = () => {
    // Set the target time in Indian Standard Time (IST)
    const targetTime = moment.tz("2023-10-11 12:00:00", "Asia/Kolkata");
    
    const currentTime = moment();
    const timeDifference = targetTime.diff(currentTime);

    if (timeDifference <= 0) {
      // Countdown reached or passed the target time
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      return;
    }

    const duration = moment.duration(timeDifference);
    setCountDownTime({
      days: duration.days().toString().padStart(2, "0"),
      hours: duration.hours().toString().padStart(2, "0"),
      minutes: duration.minutes().toString().padStart(2, "0"),
      seconds: duration.seconds().toString().padStart(2, "0"),
    });
  };

  useEffect(() => {
    // Calculate the countdown initially
    calculateCountdown();

    // Update the countdown every second
    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
      <div className="flex justify-center gap-3 sm:gap-8">
        <CountdownBox value={Number(countDownTime.days)} label="Days" />
        <CountdownBox value={Number(countDownTime.hours)} label="Hours" />
        <CountdownBox value={Number(countDownTime.minutes)} label="Minutes" />
        <CountdownBox value={Number(countDownTime.seconds)} label="Seconds" />
      </div>
    </div>
  );
};

export default Timer;