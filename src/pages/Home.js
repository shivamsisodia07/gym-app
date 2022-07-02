import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodypart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodypart={bodyPart}
        setBodypart={setBodypart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodypart={bodyPart}
      />
    </Box>
  );
};

export default Home;
