import Next from "../Next/Next";
//import Last from "../Last/Last";
//import Thumb from "../Thumb/Thumb";

import GetAll from "../../../utils/getApi";
import { useState, useCallback, useEffect } from "react";

import "./Aside.css";

export default function Aside() {
  const [nextLaunch, setNextLaunch] = useState({});

  useEffect(() => {
    function getNextLaunch() {
      const data = new GetAll();
      data.getNextLaunch().then((data) => setNextLaunch(data));
    }

    getNextLaunch();
  }, []);
  // console.log("NEXT", nextLaunch);

  const [timeToLaunch, setTimeToLaunch] = useState();
  const [date, setDate] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [secondes, setSecondes] = useState();

  let dateLaunch = nextLaunch.date_unix;

  // console.log("datlelaunch", dateLaunch);

  const useDate = () => {
    const getCurrentTime = useCallback(() => {
      let today = new Date();
      let thisDate = Date.now(today);
      let goodDate = Math.floor(thisDate / 1000);

      // console.table("DATE", goodDate);
      setDate(goodDate);
    }, []);
    useEffect(() => {
      const timer = setInterval(() => getCurrentTime(), 1000);
      return () => clearTimeout(timer);
    }, [getCurrentTime]);

    return {
      date,
    };
  };

  useDate(date);

  let time = parseInt(dateLaunch) - parseInt(date);

  // console.table("timeToLaunch", time);

  useEffect(() => {
    function getNextLaunchDate() {
      setTimeToLaunch(time);
    }

    getNextLaunchDate();
  }, [time]);

  let daysToUse = Math.floor(time / 86400);
  let hoursToUse = Math.floor((time % 86400) / 3600);
  let minutesToUse = Math.floor(((time % 86400) % 3600) / 60);
  let secondesToUse = Math.floor(((time % 86400) % 3600) % 60);

  useEffect(() => {
    function getDaysHoursMinutes() {
      setDays(daysToUse);
      setHours(hoursToUse);
      setMinutes(minutesToUse);
      setSecondes(secondesToUse);
    }

    getDaysHoursMinutes();
  }, [daysToUse, hoursToUse, minutesToUse, secondesToUse]);

  return (
    <div className="aside">
      <div className="aside-inside">
        <div>
          <h2>NEXT LAUNCH</h2>

          <Next
            nextLaunch={nextLaunch}
            timeToLaunch={timeToLaunch}
            days={days}
            hours={hours}
            minutes={minutes}
            secondes={secondes}
          />
        </div>
      </div>
    </div>
  );
}
