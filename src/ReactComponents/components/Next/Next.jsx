import "./Next.css";
import rocket from "../../../assets/rocket.jpg";

export default function Next({
  nextLaunch,
  timeToLaunch,
  days,
  hours,
  minutes,
  secondes,
}) {
  return (
    <div className="next">
      {timeToLaunch > 0 ? (
        <figure>
          {nextLaunch.image ? (
            <img
              className="next_img"
              src={nextLaunch.image}
              alt={nextLaunch.name}
            />
          ) : (
            <img src={rocket} alt="" />
          )}
          <figcaption>
            <div className="next-name">
              <div>
                <h3>
                  <span className="color-details">Name:</span> {nextLaunch.name}
                </h3>
              </div>
            </div>
            <p>
              <span className="color-details">Next launch in: </span>
              {timeToLaunch} <span>secondes</span>
            </p>
            <p>
              {days}
              <span className="color-details"> d </span>
              {hours} <span className="color-details"> h </span>
              {minutes} <span className="color-details"> min </span>
              {secondes} <span className="color-details"> sec </span>
            </p>

            <div>
              {nextLaunch.article ? (
                <a href={nextLaunch.article} target="_blank" rel="noreferrer">
                  Link to learn more about »»»
                </a>
              ) : (
                <></>
              )}
            </div>
          </figcaption>
        </figure>
      ) : (
        <figure>
          <img src={rocket} alt="" />

          <figcaption>
            <div className="soon">
              <div>
                <h3>
                  <span className="color-details">Will be updated soon!</span>
                </h3>
              </div>
            </div>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
