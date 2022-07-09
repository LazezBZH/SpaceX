import "./Thumb.css";
import nopict from "../../../assets/no-image.png";
//import { Link } from "react-router-dom";

export default function Thumb({ launch }) {
  return (
    <figure className="thumb">
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
        <h2>Name: {launch.name}</h2>
      </figcaption>
    </figure>
  );
}
