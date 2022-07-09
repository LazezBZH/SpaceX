import Thumb from "../../components/Thumb/Thumb";
import Header from "../../components/Header/Header";
import GetAll from "../../../utils/getApi";
import { useEffect, useState } from "react";

import "./Home.css";

export default function Home() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    function getLaunches() {
      const data = new GetAll();
      data.getLaunches().then((data) => setLaunches(data));
    }
    getLaunches();
  }, []);

  return (
    <div className="home">
      <Header />

      <div className="gallery">
        {launches.map((launch) => {
          return <Thumb key={launch.name} launch={launch} />;
        })}
      </div>
    </div>
  );
}
