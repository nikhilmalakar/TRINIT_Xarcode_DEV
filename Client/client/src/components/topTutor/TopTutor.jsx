import React from "react";
import "./topTutor.css";

export default function TopTutors() {
  return (
    <div>
      <div className="top-tutor-container flex flex-col align-center justify-center font-bold text-xl">
        <h1 className="text-center text-5xl m-4">Top Tutors</h1>
        <div className="top-tutor-gallery flex align-center justify-center">
          <div className="top-tutor-img-box ">
            <h3>Jim-Spanish</h3>
            {/* <h3>John</h3> */}
          </div>
          <div className="top-tutor-img-box">
            <h3>John-Italian</h3>
            {/* <h3>John</h3> */}
          </div>
          <div className="top-tutor-img-box">
            <h3>Mary-German</h3>
          </div>
          <div className="top-tutor-img-box">
            <h3>Jane-French</h3>
          </div>
          <div className="top-tutor-img-box">
            <h3>Satvik-Hindi</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
