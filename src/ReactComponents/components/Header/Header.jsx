import "./Header.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>SpaceX</h1>
      <div>
        <h2>Find all launches, enjoy videos and pictures</h2>
        <button>
          <a target="_blank" rel="noreferrer" href="https://www.spacex.com/">
            Visit SpaceX® official website
          </a>
        </button>
      </div>
      <div>
        <ToggleButton />
        <div className="header-btn">
          <div className="link">
            <Link to="/">Launches &#x1F680;</Link>
          </div>
          <div className="link">
            <Link to="/crew">Crew &#x1F469;&#x200D;&#x1F680;</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
