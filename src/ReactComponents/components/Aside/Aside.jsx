import Next from "../Next/Next";
//import Last from "../Last/Last";
//import Thumb from "../Thumb/Thumb";

import GetAll from "../../../utils/getApi";
import { useEffect, useState } from "react";

import "./Aside.css";

export default function Aside() {
  const [nextLaunch, setNextLaunch] = useState({});
  // const [lastLaunch, setLastLaunch] = useState({});

  useEffect(() => {
    function getNextLaunch() {
      const data = new GetAll();
      data.getNextLaunch().then((data) => setNextLaunch(data));
    }

    getNextLaunch();
  }, []);

  // useEffect(() => {
  //   function getLastLaunch() {
  //     const data = new GetAll();
  //     data.getLastLaunch().then((data) => setLastLaunch(data));
  //   }

  //   getLastLaunch();
  // }, []);

  return (
    <div className="aside">
      <div className="aside-inside">
        <div>
          <h2>NEXT LAUNCH</h2>
          <Next nextlaunch={nextLaunch} />
        </div>
        <div className="separate"></div>
        {/* <div>
          <h2>LAST LAUNCH</h2>
          <Last launch={lastLaunch} />
        </div> */}
      </div>
    </div>
  );
}
