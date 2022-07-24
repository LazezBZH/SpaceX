import CrewGallery from "../../components/Gallery/CrewGallery";
import Header from "../../components/Header/Header";

import "./Crew.css";

export default function Crew() {
  return (
    <div className="home">
      <div className="crew-loader">
        <div className="crew-rocket">
          <i class="fa fa-user-astronaut"></i>
        </div>
      </div>
      <Header />
      <div className="main">
        <CrewGallery />
      </div>
    </div>
  );
}
