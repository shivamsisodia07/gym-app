import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [{
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];
    return ( <
        Stack gap = '60px'
        sx = {
            {
                flexDirection: { lg: "row" },
                p: "20px",
                alignItems: "center",
            }
        } >
        <
        img src = { gifUrl }
        alt = { name }
        loading = 'lazy'
        className = 'detail-image' / >

        <
        Stack sx = {
            {
                gap: {
                    lg: "30px",
                    xs: "20px",
                },
                boxShadow: "1px 1px 10px -7px black",
                padding: "16px",
                borderRadius: "22px",
            }
        } >
        <
        Typography variant = 'h3' > { name } < /Typography> <
        Typography variant = 'h6' >
        Exercises keep you strong. { name } { "  " }
        is one of the best exercises to target your { target }.it will help you improve your mood and gain energy <
        /Typography> {
            extraDetail.map((item) => ( <
                Stack key = { item.name }
                direction = 'row'
                gap = '20px'
                alignItems = 'center' >
                <
                Button sx = {
                    {
                        background: "#FFF2DB",
                        borderRadius: "50%",
                        width: "80px",
                        height: "80px",
                    }
                } >
                <
                img src = { item.icon }
                alt = { bodyPart }
                style = {
                    { width: "50px", height: "50px" } }
                /> <
                /Button> <
                Typography textTransform = 'capitalize'
                sx = {
                    { fontSize: { lg: "25px", xs: "20px" } } } > { item.name } <
                /Typography> <
                /Stack>
            ))
        } <
        /Stack> <
        /Stack>
    );
};

export default Details;