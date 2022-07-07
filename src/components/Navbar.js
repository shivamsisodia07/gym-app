import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import "./style.css";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Stack
        direction='row'
        justifyContent='space-around'
        background-color='#d7c9b280'
        // height='11vh'
        border='1px solid #090909c9'
        sx={{
          gap: { sm: "80px", xs: "40px" },
          pt: { sm: "12px", xs: "12px" },
          height: { sm: "11vh", xs: "8vh" },
          justifyContent: "none",
          px: "10px",
          borderRadius: "2%",
        }}>
        <Link to='/'>
          <img
            src={Logo}
            alt='logo'
            style={{
              width: "48px",
              height: "48px",
              margin: "0 20px",
            }}
          />
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flix-end'>
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}>
            {" "}
            Home{" "}
          </Link>
          <a
            href='#exercises'
            style={{ textDecoration: "none", color: "#3A1212" }}>
            Exercises
          </a>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
