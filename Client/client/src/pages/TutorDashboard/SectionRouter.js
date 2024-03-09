// SectionRouter.js
import React from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../../scenes/dashboard";
import Courses from "../../scenes/courses";

const SectionRouter = () => {
  const { section } = useParams();

  switch (section) {
    case "dashboard":
      return <Dashboard />;
    case "courses":
      return <Courses />;
    // Add more cases for other sections
    default:
      return <Dashboard />;
  }
};

export default SectionRouter;
