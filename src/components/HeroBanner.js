import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
// import Typography from "@mui/material/Typography";
import HeroBannerImage from "../assets/images/banner-rbg.png";
import { borderRadius } from "@mui/system";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "80px",
          xs: "50px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position='relative'
      p='15px'>
      <Typography color='#fdb634' fontWeight='600' fontSize='30px'>
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "50px", xs: "40px" }, color: "#271285"
        }}
        mb='23px'
        mt='20px'>
        Sweat,Smile
        <br />
        and repeat
      </Typography>
      <Typography fontSize='20px' lineHeight='35px' mt={4} mb={1}>
        Check out most effective exercises
      </Typography>

      <Button
        variant='contained'
        href='#exercises'
        sx={{
          backgroundColor: "#6d50ef",
          padding: "7px",
          fontSize: "10px",
        borderRadius:"16px"  
        }}>
        Explore
      </Button>
      <Typography
        fontWeight={600}
        color='#271285'
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize='200px'>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
