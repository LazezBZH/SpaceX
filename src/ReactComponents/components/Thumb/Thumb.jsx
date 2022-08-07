import "./Thumb.css";
import nopict from "../../../assets/no-image.png";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

export default function Thumb({ launch }) {
  const date = new Date(launch.date_utc);

  let today = new Date();

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

        <figcaption className="caption1" id="caption1">
          <div>
            {launch.upcoming === false ? (
              <div>
                {launch.success === true ? (
                  <p className="success">Success &#x1F44D;</p>
                ) : (
                  <p className="success">Fail &#x1F44E;</p>
                )}
              </div>
            ) : (
              <p className="empty"></p>
            )}
          </div>
          <div className="launch-crew">
            {launch.crew.length > 0 ? (
              launch.crew.map((cre) => {
                return (
                  <Link
                    target="_blank"
                    key={cre.crew}
                    to={`/onecrew/${cre.crew}`}
                  >
                    <div className="launch-crew_p">See: {cre.role} </div>
                  </Link>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <div className="upcoming">
            {launch.upcoming === true ? (
              today - date > 0 ? (
                <div className="filter-figure">
                  <p className="climb">Will be updated soon!</p>
                </div>
              ) : (
                <p className="clign">Upcoming</p>
              )
            ) : (
              <p>Passed</p>
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
          <div>
            <div className="name">
              <div className="main-caption">
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
            <p>
              <span className="color-details">Fligth number:</span>{" "}
              {launch.flight_number}
            </p>
            <div className="details">
              {launch.details ? (
                <p>
                  <span className="color-details">Details:</span>{" "}
                  {launch.details}
                </p>
              ) : (
                <p>
                  {" "}
                  <span className="color-details">Sorry no details</span>
                </p>
              )}
            </div>
          </div>
          <div className="launch-link">
            {launch.links.article ? (
              <a href={launch.links.article} target="_blank" rel="noreferrer">
                Link to learn more about »»»
              </a>
            ) : (
              <></>
            )}
          </div>
          <div className="launch-link">
            {launch.links.wikipedia ? (
              <a href={launch.links.wikipedia} target="_blank" rel="noreferrer">
                Wikipedia »»»
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

// <div className="filter-figure">
//   {launch.upcoming === true ? (
//     <div>
//       {today - date > 0 ? (

//       ) : (
//         <p className="empty"></p>
//       )}
//     </div>
//   ) : (
//     <p className="empty"></p>
//   )}
// </div>;
