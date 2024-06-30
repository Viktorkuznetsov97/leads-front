import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const ProgressTracker = ({ leads, target }) => {
  const percentage = (leads / target) * 100;

  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box
        width="100%"
        mr={1}
        position="relative"
        height="10px"
        borderRadius="10px"
        bgcolor="#f5f5f5"
        overflow="hidden"
      >
        <Box
          position="absolute"
          left="0px"
          height="100%"
          bgcolor="green"
          borderRadius="10px"
          width={percentage + "%"}
          sx={{ transition: "all 0.3s" }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ margin: "0px" }}
        >
          {`${Math.round(percentage)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressTracker;
