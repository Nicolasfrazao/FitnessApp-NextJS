"use client"
import React from 'react';
import { Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/images/Logo.png';


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={48} height={48} className='mt-0 ml-5' />
      </Link>
      <Stack>
        <Link href="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}> 
            Home
        </Link>
      </Stack>
    </Stack>
  )
}

export default Navbar