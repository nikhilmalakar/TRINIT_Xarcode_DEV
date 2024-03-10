import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/tutorDash/StatBox";
import EmailIcon from "@mui/icons-material/Email";

import React from "react";
import Header from "../../components/Header";
import AddCourseModal from "../../components/addCourse/AddCourseModal.jsx";

const Courses = ({ user = "Student", id }) => {
  const [addCourseModal, setAddCourseModal] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="MY COURSES" />
      {user != "Student" ? (
        <div className="m-2 ">
          <Button
            onClick={() => setAddCourseModal(true)}
            variant="contained"
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            href=""
          >
            AddCourse
          </Button>
          {addCourseModal && (
            <AddCourseModal onClose={() => setAddCourseModal(false)} />
          )}
        </div>
      ) : null}

      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridAutoRows="150px"
        gap="20px"
      >
        <Box
          //   gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="LANGUAGE: French"
            subtitle="BY PROFESSOR: Nikhil Malakar"
            progress="0.75"
            increase="4:00 PM - 6:00 PM"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          //   gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="LANGUAGE: Hindi"
            subtitle="BY PROFESSOR: Ayush Nandi"
            progress="0.75"
            increase="7:00 PM - 8:00 PM"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
