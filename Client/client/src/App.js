import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teacher_profile_page from "./pages/Teacher_profile_page";
import PaymentPage from "./pages/Payment_Page/Payment_Page";
import "./App.css";
import CourseGrid from "./pages/Courses_Page/CourseGrid";
import TutorDashBoard from "./pages/TutorDashboard/TutorDashBoard";
import Courses from "./scenes/courses";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Teacher_profile_page />} />
          <Route path="/payment" element={<PaymentPage />} />
          {/* <Route path="/tutordashboard" element={<TutorDashBoard />} /> */}
          <Route path="/tutordash/:page" element={<TutorDashBoard />} />

          <Route path="/tutordash/courses" element={<Courses />} />
          <Route path="/courses" element={<CourseGrid />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
