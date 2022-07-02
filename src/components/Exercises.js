import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  return (
    <Box id='exercises' sx={{ mt: { lg: "110px" } }} mt='50px' p='20px'>
      <typography variant='h3' mb='46px'>
        hy
      </typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap='wrap'
        justifyContent='center'>
        {exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
