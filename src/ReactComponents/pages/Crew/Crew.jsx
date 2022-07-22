import CrewGallery from "../../components/Gallery/CrewGallery";
import Header from "../../components/Header/Header";

import "./Crew.css";

export default function Crew() {
  return (
    <div className="home">
      <Header />
      <div className="main">
        <CrewGallery />
      </div>
    </div>
  );
}
