import Link from "next/link";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({exercise} : any) => {
  return (
    <Link className="exercise-card" href={ `/exercise/${ exercise.id }` }>
      <Image src={ exercise.gifUrl } alt={ exercise.name } loading="lazy" />
      <Stack direction='row'>
        <Button sx={ { ml: '22px',color: '#fff', background: '#FFA9A9', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize'  } }>
          { exercise.bodyPart }
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;