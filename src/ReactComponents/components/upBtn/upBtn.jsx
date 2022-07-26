import React from "react";
import { useState, useEffect } from "react";

import "./upBtn.css";

export default function UpBtn() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-btn">
      {showTopBtn && (
        <button onClick={goToTop}>
          <i className="fa fa-rocket" aria-hidden="true"></i> UP
          <i className="fa fa-rocket" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
}
