import React from "react";
import "./topTutor.css";

export default function TopTutors() {
  return (
    <div>
      <div className="top-tutor-container mb-10 flex flex-col align-center justify-center font-bold text-xl">
        <h1 className="text-center text-5xl m-10">Top Tutors - Learn from the Best!</h1>
        <div className="top-tutor-gallery flex align-center justify-center">
          <div className="top-tutor-img-box ">
            <h3>Jim C - Spanish Tutor</h3>
            {/* <h3>John</h3> */}
          </div>
          <div className="top-tutor-img-box">
            <h3>John K - Italian Tutor</h3>
            {/* <h3>John</h3> */}
          </div>
          <div className="top-tutor-img-box">
            <h3>Mary A. - German Tutor</h3>
          </div>
          <div className="top-tutor-img-box">
            <h3>Jane J.- French Tutor</h3>
          </div>
          <div className="top-tutor-img-box">
            <h3>Satvik - Hindi Tutor</h3>
          </div>
          <div className="top-tutor-img-box">
            <h3>Elsy P. - English Tutor</h3>
          </div>
          <div className="top-tutor-img-box">
            <h3>Rae L. - Japanese Tutor</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
