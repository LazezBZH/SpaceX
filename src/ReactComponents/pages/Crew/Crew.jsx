import CrewGallery from "../../components/Gallery/CrewGallery";
import Header from "../../components/Header/Header";

import "./Crew.css";

export default function Crew() {
  return (
    <div className="crew-home">
      <div className="crew-loader">
        <div className="crew-rocket">
          <i className="fa fa-user-astronaut"></i>
        </div>
      </div>
      <Header />
      <div className="crew-main">
        <CrewGallery />
      </div>
    </div>
  );
}
