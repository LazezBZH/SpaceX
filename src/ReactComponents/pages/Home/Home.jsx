import Aside from "../../components/Aside/Aside";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="loader">
        <div className="rocket">
          <i className="fa fa-rocket" aria-hidden="true"></i>{" "}
        </div>
      </div>
      <Header />
      <div className="main">
        <Gallery />
        <Aside />
      </div>
    </div>
  );
}
