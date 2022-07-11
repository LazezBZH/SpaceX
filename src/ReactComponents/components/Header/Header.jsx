import "./Header.css";
import ToggleButton from "../ToggleButton/ToggleButton";

const Header = () => {
  return (
    <header className="header">
      <h1>SpaceX</h1>
      <h2>view all launches, enjoy videos and pictures</h2>
      <ToggleButton />
    </header>
  );
};

export default Header;
