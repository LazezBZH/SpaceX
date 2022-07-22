import CrewThumb from "../Thumb/CrewThumb";

import GetAll from "../../../utils/getApi";
import { useEffect, useState } from "react";

import "./Gallery.css";

export default function CrewGallery() {
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    function getCrews() {
      const data = new GetAll();
      data.getCrews().then((data) => setCrews(data));
    }

    getCrews();
  }, []);
  console.log("crews", crews);
  return (
    <div className="gallery">
      {crews.map((crew) => {
        return <CrewThumb key={crew.name} crew={crew} />;
      })}
    </div>
  );
}
