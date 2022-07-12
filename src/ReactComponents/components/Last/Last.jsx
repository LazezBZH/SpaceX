import "./Last.css";
import nopict from "../../../assets/no-image.png";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Last({ launch }) {
  const date = new Date(launch.date_utc);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [openModal, setOpenModal] = useState(false);
  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      <figure className="last">
        {openModal && (
          <Modal close={onCloseModal} videoId={launch.links.youtube_id} />
        )}

        {launch.links.flickr.original[0] ? (
          <img
            className="last_img"
            src={launch.links.flickr.original[0]}
            alt={launch.name}
          />
        ) : (
          <img src={nopict} alt="" />
        )}
        <figcaption>
          <div className="name">
            <div>
              <h2>
                <span className="color-details">Name:</span> {launch.name}
              </h2>
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
            <span className="color-details">Date:</span> {day}/{month}/{year}
          </p>
          <div>
            {launch.details ? (
              <p>
                <span className="color-details">Details:</span> {launch.details}
              </p>
            ) : (
              <p>
                {" "}
                <span className="color-details">Sorry no details</span>
              </p>
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
          <div>
            {launch.success === true ? (
              <p className="success">Success &#x1F44D;</p>
            ) : (
              <p className="success">Fail &#x1F44E;</p>
            )}
          </div>
        </figcaption>
      </figure>
    </>
  );
}
