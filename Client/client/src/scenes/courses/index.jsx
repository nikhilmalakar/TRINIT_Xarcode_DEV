import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";

import React from "react";
import Header from "../../components/Header";

const Courses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="MY COURSES" />

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
            title="LANGUAGE: ENGLISH"
            subtitle="BY PROFESSOR: JOHN DOE"
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
            title="LANGUAGE: ENGLISH"
            subtitle="BY PROFESSOR: JOHN DOE"
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
            title="LANGUAGE: ENGLISH"
            subtitle="BY PROFESSOR: JOHN DOE"
            progress="0.75"
            increase="4:00 PM - 6:00 PM"
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
