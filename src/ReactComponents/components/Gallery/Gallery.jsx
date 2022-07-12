import Thumb from "../Thumb/Thumb";
//import Next from "../Next/Next";

import GetAll from "../../../utils/getApi";
import { useEffect, useState } from "react";

import "./Gallery.css";

export default function Gallery() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    function getLaunches() {
      const data = new GetAll();
      data.getLaunches().then((data) => setLaunches(data));
    }

    getLaunches();
  }, []);
  //let launch = launches[0];
  //console.log("launch", launch);
  return (
    <div className="gallery">
      {launches.map((launch) => {
        return <Thumb key={launch.name} launch={launch} />;
      })}
    </div>
  );
}
