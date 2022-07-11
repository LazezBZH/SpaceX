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
  return (
    <div className="modal">
      <button onClick={props.close}>&#x274C;</button>
      <div className="video-youtube">
        <YouTube videoId={props.videoId} opts={opts} />
      </div>
    </div>
  );
}
