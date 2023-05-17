import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import "./style.css";
import Logo from "../assets/icons/logo2.png";

const Navbar = () => {
    return ( <
        div className = 'navbar' >
        <
        Stack direction = 'row'
        justifyContent = 'space-around'
        backgroundColor = 'red'
        sx = {
            {
                gap: { sm: "80px", xs: "40px" },
                pt: { sm: "12px", xs: "12px" },
                height: { sm: "11vh", xs: "8vh" },
                justifyContent: "none",
                px: "10px",
                borderRadius: "1%",
            }
        }

        style = {
            { padding: '17px' }
        } >
        <
        Link to = '/' >
        <
        img src = { Logo }
        alt = 'logo'
        style = {
            {
                width: "40px",
                height: "40px",
                margin: "0 20px",
            }
        }
        /> < /
        Link > <
        Stack direction = 'row'
        gap = '40px'
        fontSize = '24px'
        alignItems = 'flix-end'
        style = {
            {
                fontSize: "19px",

            }


        }

        >
        <
        Link to = '/'
        style = {
            {
                textDecoration: "none",
                // borderBottom: "3px solid #FF2625",
                color: "black"
            }
        } > { " " }
        Home { " " } <
        /Link> <
        a href = '#exercises'
        style = {
            { textDecoration: "none", color: "black", transition: "2s" }
        } >
        Exercises <
        /a> < /
        Stack > <
        /Stack> < /
        div >
    );
};

export default Navbar;