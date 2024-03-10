import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "../scenes/dashboard";
// import jwt from 'jsonwebtoken';
// import Team from "../../scenes/team";
// import Invoices from "../../scenes/invoices";
// import Contacts from "../../scenes/contacts";
// import Form from "../../scenes/form";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
// import Calendar from "../scenes/calendar/calendar";
// import Courses from "../../scenes/courses";
import "./TutorDash.css";
function StudentDashBoard() {

  localStorage.getItem("token")

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { page } = useParams();
  const [loadedPage, setLoadedPage] = useState(null);

  const [student,setStudent] = useState(null);
  useEffect(() => {

    const id = localStorage.getItem("id");
    const init = async () => {
      const response = await fetch(
        "http://localhost:3000/student/getDetails/" + id, {method: 'GET'}
      );
      const getResponse = await response.json()
      // console.log(getResponse);
      setStudent(getResponse)
    };

    init();
    
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar user={"Student"} name='aman' isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {/* <Dashboard /> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default StudentDashBoard;
