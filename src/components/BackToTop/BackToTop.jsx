import React, { useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="scroll">
      <button className="button_scroll" onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}}>
        <i className="fas fa-arrow-up"  aria-hidden="true"></i>
      </button>
    </div>
  );
}
