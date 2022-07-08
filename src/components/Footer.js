import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import "./style.css";

const Footer = () => (
  <Stack className='foot' direction='coloumn' gap='10px'>
    <Stack
      className='social_icon'
      direction='row'
      gap='10px '
      style={{ Color: "white" }}>
      <a href='https://www.facebook.com/shivam.sisodia.54/'>
        <ion-icon name='logo-facebook'></ion-icon>
      </a>
      <a href='https://www.linkedin.com/in/shivam-sisodia-80495a204/'>
        <ion-icon name='logo-linkedin'></ion-icon>
      </a>
      <a href='https://www.instagram.com/shivam.sisodia.007/'>
        <ion-icon name='logo-instagram'></ion-icon>
      </a>
      <a href='https://twitter.com/Shivam7Sisodia'>
        <ion-icon name='logo-twitter'></ion-icon>
      </a>
    </Stack>

    <Stack className='menu' direction='row' gap='10px'>
      <Link
        to='/'
        style={{
          textDecoration: "none",
          color: "#fff",
          cursor: "pointer",
        }}>
        {" "}
        Home{" "}
      </Link>
      <a href='#exercises'>Exercises</a>
    </Stack>

    <Typography className='copyright' fontSize='0.8rem'>
      @2022 Fit Factory GYM | All Rights Reserved
    </Typography>
    <Typography className='developer' fontSize='0.8rem'>
      By: SHIVAM SISODIA
    </Typography>
  </Stack>
);

export default Footer;
{
  /* <Box mt='80px' bgcolor='#FFF3F4'>
    <Stack
      gap='40px'
      sx={{ alignItems: "center" }}
      flexWrap='wrap'
      px='40px'
      pt='24px'>
      <img src={Logo} alt='logo' style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Typography
      variant='h5'
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt='41px'
      textAlign='center'
      pb='40px'>
      Made with ❤️ by shivam sisodia
    </Typography>
  </Box> */
}
