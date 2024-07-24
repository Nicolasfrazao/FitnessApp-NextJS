import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" sx={{alignItems: 'center'}} flexWrap="wrap" px="40px" pt="24px">
        <Image src={Logo} alt='Logo' style={{width: '200px', height: '45px'}}/>
      </Stack>
      <Typography variant='h5' sx={{fontSize: {lg: '30px', xs: '20px'}}} mt="45px" textAlign="center" pb='40px'>
        Made with NextJS 
      </Typography>
    </Box>
  );
}

export default Footer