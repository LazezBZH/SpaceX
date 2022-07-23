import Thumb from "../Thumb/Thumb";

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
    }
    return launches.filter((item) => !item.upcoming && !item.success);
  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, launches]);
  return (
    <div className="all-gallery">
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
