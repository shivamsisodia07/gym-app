import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import loader from "./loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "200px", xs: "0" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color='#000'
        mb='33px'>
        Exercises that target the same musle group
      </Typography>
      <Stack direction='row' sx={{ p: "2px", position: "relative" }} mb='100px'>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <loader />
        )}
      </Stack>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color='#000'
        mb='33px'>
        Exercises that use the equipment
      </Typography>
      <Stack direction='row' sx={{ p: "2px", position: "relative" }} mb='100px'>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
