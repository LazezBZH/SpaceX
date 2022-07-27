import Thumb from "../Thumb/Thumb";
import UpBtn from "../upBtn/upBtn";

import GetAll from "../../../utils/getApi";
import { useEffect, useState, useMemo } from "react";

import "./Gallery.css";

export default function Gallery() {
  const [launches, setLaunches] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    function getLaunches() {
      const data = new GetAll();
      data.getLaunches().then((data) => setLaunches(data));
    }

    getLaunches();
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function getFilteredList() {
    switch (selectedCategory) {
      case "upcoming":
        return launches.filter((item) => item.upcoming);
      case "passed":
        return launches.filter((item) => !item.upcoming);
      case "success":
        return launches.filter((item) => item.success);
      case "failed":
        return launches.filter((item) => !item.upcoming && !item.success);
      case "pictures":
        return launches.filter((item) => item.links.flickr.original[0]);
      case "details":
        return launches.filter((item) => item.details);
      case "links":
        return launches.filter(
          (item) => item.links.article || item.links.wikipedia
        );
      case "crew":
        return launches.filter((item) => item.crew.length > 0);
      default:
        return launches;
    }
  }
  let filteredList = useMemo(getFilteredList, [selectedCategory, launches]);
  return (
    <div className="all-gallery">
      <UpBtn />
      <div className="filter">
        <p>FILTER</p>
        <select
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="upcoming">Upcoming</option>
          <option value="passed">Passed</option>
          <option value="success">Success</option>
          <option value="failed">Failed</option>
          <option value="pictures">With picture</option>
          <option value="details">With details</option>
          <option value="links">Link avaiable</option>
          <option value="crew">With crew details</option>
        </select>
      </div>
      <div className="gallery">
        {filteredList.map((launch) => {
          return <Thumb key={launch.name} launch={launch} />;
        })}
      </div>
    </div>
  );
}
