import "./Thumb.css";
import nopict from "../../../assets/no-image.png";
import { useState } from "react";
import Modal from "../Modal/Modal";
//import { Link } from "react-router-dom";

export default function Thumb({ launch }) {
  const date = new Date(launch.date_utc);
  console.log(date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [openModal, setOpenModal] = useState(false);
  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      <figure className="thumb">
        {openModal && (
          <Modal close={onCloseModal} videoId={launch.links.youtube_id} />
        )}
        <figcaption className="caption1">
          <div>
            {launch.upcoming === false ? (
              <p>
                {launch.success === true ? (
                  <p className="success">Success &#x1F44D;</p>
                ) : (
                  <p className="success">Fail &#x1F44E;</p>
                )}
              </p>
            ) : (
              <p className="empty"></p>
            )}
          </div>

          <div className="incomming">
            {launch.upcoming === false ? (
              <p>Passed</p>
            ) : (
              <p className="clign">Incomming</p>
            )}
          </div>
        </figcaption>
        {launch.links.flickr.original[0] ? (
          <img
            className="thumb_img"
            src={launch.links.flickr.original[0]}
            alt={launch.name}
          />
        ) : (
          <img src={nopict} alt="" />
        )}
        <figcaption>
          <div className="name">
            <div>
              <h2>Name: {launch.name}</h2>
            </div>
            <div>
              {launch.links.youtube_id ? (
                <button onClick={() => setOpenModal(true)}>
                  Video &#x1F3A5;
                </button>
              ) : (
                <button disabled>No video</button>
              )}
            </div>
          </div>
          <p>
            Date: {day}/{month}/{year}
          </p>
          <div>
            {launch.details ? (
              <p>Details: {launch.details}</p>
            ) : (
              <p>Details: Sorry no details.</p>
            )}
          </div>
          <div>
            {launch.links.article ? (
              <a href={launch.links.article} target="_blank" rel="noreferrer">
                Link to learn more about »»»
              </a>
            ) : (
              <></>
            )}
          </div>
        </figcaption>
      </figure>
    </>
  );
}
