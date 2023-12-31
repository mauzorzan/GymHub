import React from 'react';
import { Box, Stack} from '@mui/material';
import Logo from '../assets/images/Logo.webp';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px" pb='25px'>
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
   
  </Box>
);

export default Footer;