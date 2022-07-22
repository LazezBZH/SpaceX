import "./Next.css";
import nopict from "../../../assets/no-image.png";

export default function Next({ nextLaunch, timeToLaunch }) {
  // const [timeToLaunch, setTimeToLaunch] = useState();
  // const [date, setDate] = useState();
  // const dateLaunch = new Date(nextLaunch.date_utc);

  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();

  // let dateNow = Date.now();
  // let time = date - dateNow;
  // console.log(time);

  // const getInterval = () => {
  //   const getCurrentTime = useCallback(() => {
  //     let dateNow = Date.now();
  //     setDate(dateNow);
  //   }, []);

  //   useEffect(() => {
  //     const timer = setInterval(() => getCurrentTime(), 1000);
  //     return () => clearTimeout(timer);
  //   }, [getCurrentTime]);
  //   console.log("coucou", dateNow);
  //   return {
  //     dateNow,
  //   };
  // };

  // getInterval(dateNow);
  return (
    <>
      {timeToLaunch > 0 ? (
        <figure className="next">
          {nextLaunch.image ? (
            <img
              className="next_img"
              src={nextLaunch.image}
              alt={nextLaunch.name}
            />
          ) : (
            <img src={nopict} alt="" />
          )}
          <figcaption>
            <div className="name">
              <div>
                <h2>
                  <span className="color-details">Name:</span> {nextLaunch.name}
                </h2>
              </div>
            </div>
            <p>
              <span className="color-details">Next launch in: </span>
              {timeToLaunch} <span>secondes</span>
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
        <figure className="next">
          <img src={nopict} alt="" />

          <figcaption>
            <div className="soon">
              <div>
                <h2>
                  <span className="color-details">Will be updated soon!</span>
                </h2>
              </div>
            </div>
          </figcaption>
        </figure>
      )}
    </>
  );
}
