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
  console.log("NEXT", nextLaunch);

  const [timeToLaunch, setTimeToLaunch] = useState();
  // const [dateLaunch, setDateLaunch] = useState();
  const [date, setDate] = useState();

  // let dateLaunch = Date(dateL);

  // console.log(time);
  // console.log("datL", dateLaunch);

  // console.log("time", time);
  let dateLaunch = nextLaunch.date_unix;
  // thisDateLaunch = parseInt(thisDateLaunch);
  // useEffect(() => {
  //   setDateLaunch(thisDateLaunch);
  // }, [thisDateLaunch]);
  console.log("datlelaunch", dateLaunch);

  const useDate = () => {
    const getCurrentTime = useCallback(() => {
      let today = new Date();
      let thisDate = Date.now(today);
      let goodDate = Math.floor(thisDate / 1000);

      console.table("DATE", goodDate);
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

  console.table("timeToLaunch", time);

  useEffect(() => {
    function getNextLaunchDate() {
      setTimeToLaunch(time);
    }

    getNextLaunchDate();
  }, [time]);

  return (
    <div className="aside">
      <div className="aside-inside">
        <div>
          <h2>NEXT LAUNCH</h2>

          <Next nextLaunch={nextLaunch} timeToLaunch={timeToLaunch} />
        </div>
        {/* <div className="separate"></div>
        <div>
          <h2>LAST LAUNCH</h2>
          <Last launch={lastLaunch} />
        </div> */}
      </div>
    </div>
  );
}
