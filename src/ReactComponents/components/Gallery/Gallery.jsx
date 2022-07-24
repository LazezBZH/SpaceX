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
    if (!selectedCategory) {
      return launches;
    } else if (selectedCategory === "true") {
      return launches.filter((item) => item.upcoming);
    } else if (selectedCategory === "false") {
      return launches.filter((item) => !item.upcoming);
    } else if (selectedCategory === "success") {
      return launches.filter((item) => item.success);
    } else if (selectedCategory === "pictures") {
      return launches.filter((item) => item.links.flickr.original[0]);
    } else if (selectedCategory === "details") {
      return launches.filter((item) => item.details);
    } else if (selectedCategory === "links") {
      return launches.filter((item) => item.links.article);
    }
    return launches.filter((item) => !item.upcoming && !item.success);
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
          <option value="true">Incomming</option>
          <option value="false">Passed</option>
          <option value="success">Success</option>
          <option value="failed">Failed</option>
          <option value="pictures">With picture</option>
          <option value="details">With details</option>
          <option value="links">Link avaiable</option>
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
