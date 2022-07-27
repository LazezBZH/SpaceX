// import OneCrewThumb from "../../components/Thumb/OneCrewThumb";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetAll from "../../../utils/getApi";
import { Link } from "react-router-dom";
import nopict from "../../../assets/no-photo.png";
import spacex from "../../../assets/spacex-logo.png";

import "./OneCrew.css";

export default function OneCrew() {
  const param = useParams();
  const crewId = param.id;
  console.log("ID", crewId);
  const [oneCrew, setOneCrew] = useState({});
  let url = "https://api.spacexdata.com/v4/crew/" + crewId;
  console.log("URL", url);
  console.log("ONECREW", oneCrew);

  useEffect(() => {
    function getThisCrew() {
      const data = new GetAll();
      data.getOneCrew(crewId).then((data) => setOneCrew(data));
    }

    getThisCrew();
  }, [crewId]);

  return (
    <div className="one-crew">
      <Header />
      <div className="one-crew-main">
        <Link className="back" to={`/`}>
          Back ⤶
        </Link>
        <figure className="one-crew-thumb">
          {oneCrew.image ? (
            <img
              className="one-crew-thumb_img"
              src={oneCrew.image}
              alt={oneCrew.name}
            />
          ) : (
            <img src={nopict} alt="" />
          )}
          <figcaption>
            <div className="txt-caption">
              <div>
                <div className="one-crew-name">
                  <p>
                    <span className="one-crew-color-details">Name:</span>{" "}
                    {oneCrew.name}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="one-crew-color-details">Agency:</span>{" "}
                    {oneCrew.agency}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="one-crew-color-details">Status:</span>{" "}
                    {oneCrew.status}
                  </p>
                </div>
              </div>
              <div>
                {oneCrew.wikipedia ? (
                  <a href={oneCrew.wikipedia} target="_blank" rel="noreferrer">
                    Link to learn more about »»»
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div>
              {" "}
              <img src={spacex} alt="spacex" />
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
