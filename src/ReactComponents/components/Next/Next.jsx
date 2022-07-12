import "./Next.css";
import nopict from "../../../assets/no-image.png";

export default function Next({ launch }) {
  const date = new Date(launch.date_utc);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //let dateNow = Date.now();
  return (
    <>
      <figure className="next">
        {launch.links.flickr.original[0] ? (
          <img
            className="next_img"
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
          </div>
          <p>
            <span className="color-details">Date:</span> {day}/{month}/{year}
          </p>

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
