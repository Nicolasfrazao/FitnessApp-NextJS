'use client'
import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

import Icon from "../assets/icons/gym.png";

const Body = ({item, bodyPart, setBodyPart} : Props) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent='center'
      className='bodyPart-card'
      sx={ bodyPart === item ? { borderTop: '5px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '290px', cursor: 'pointer', gap: '50px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } }
      onClick={ () =>
      {
        setBodyPart( item );
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
    >
      <Image src={ Icon } alt="Dumbbell" style={{width: '40px', height: '40px'}} />
      <Typography fontSize='25px' fontWeight='bold' fontFamily='Alegreya' color='#3A1212' textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  )
}

export default Body