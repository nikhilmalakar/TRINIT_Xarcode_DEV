import React from "react";
import { useNavigate } from "react-router-dom";
import "./Teacher_profile_page.css";

const Teacher_profile_page = () => {
  const navigate = useNavigate();

  const handleJoinClass = () => {
    // Redirect to the payment page
    navigate("/payment");
  };

  return (
    <div className="container">
    <div className="course-preview">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/52-jWosm97c"
          title="Course Preview Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="description-container">
        <h2>Course Title</h2>
        <p className="teacher-timings">
          Teacher Timings: Monday - Friday, 9:00 AM - 5:00 PM
        </p>
        <p className="course-price">$99.99</p>
        <button className="join-class-button" onClick={handleJoinClass}>
          Join Class
        </button>
      </div>
    </div>
    </div>
  );
};

export default Teacher_profile_page;
