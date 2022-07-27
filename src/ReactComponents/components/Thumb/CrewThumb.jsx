import "./CrewThumb.css";
import nopict from "../../../assets/no-photo.png";

export default function CrewThumb({ crew }) {
  return (
    <>
      <figure className="crew-thumb">
        {crew.image ? (
          <img className="crew-thumb_img" src={crew.image} alt={crew.name} />
        ) : (
          <img src={nopict} alt="" />
        )}
        <figcaption>
          <div>
            <div className="crew-name">
              <p>
                <span className="crew-color-details">Name:</span> {crew.name}
              </p>
            </div>
            <div>
              <p>
                <span className="crew-color-details">Agency:</span>{" "}
                {crew.agency}
              </p>
            </div>
          </div>
          <div>
            {crew.wikipedia ? (
              <a href={crew.wikipedia} target="_blank" rel="noreferrer">
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
