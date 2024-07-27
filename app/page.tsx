'use client'

import { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "./components/Exercise";
import SearchExercises from './components/SearchExer';
import HeroBanner from "./components/Hero";

export default function Home ()
{

  const [ exercises, setExercises ] = useState( [] );
  const [ bodyPart, setBodyPart ] = useState( 'all' );

  return ( 
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={ setExercises } bodyPart={ bodyPart } setBodyPart={ setBodyPart } />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
   );
}
