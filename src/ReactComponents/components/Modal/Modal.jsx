import "./Modal.css";
import YouTube from "react-youtube";

export default function Modal(props) {
  const opts = {
    height: "585",
    width: "860",
    playerVars: {
      autoplay: 1,
    },
  };

  const optsSmall = {
    height: "390",
    width: "573",
    playerVars: {
      autoplay: 1,
    },
  };

  const optsXSmall = {
    height: "290",
    width: "430",
    playerVars: {
      autoplay: 1,
    },
  };

  const optsXXSmall = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="modal">
      <button onClick={props.close}>&#x274C;</button>
      <div className="video-youtube">
        <YouTube videoId={props.videoId} opts={opts} />
      </div>
      <div className="video-youtube_small">
        <YouTube videoId={props.videoId} opts={optsSmall} />
      </div>
      <div className="video-youtube_xsmall">
        <YouTube videoId={props.videoId} opts={optsXSmall} />
      </div>
      <div className="video-youtube_xxsmall">
        <YouTube videoId={props.videoId} opts={optsXXSmall} />
      </div>
    </div>
  );
}
