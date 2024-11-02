import React from "react";
import leaf_icon from "../../assets/green-leaf-logo-vector.jpg";
import leaf_scan from "../../assets/leaf scanning image.png";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
   
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/gallery")
  }

  return (
    <div className='pl-10'>
      <div className="flex items-center justify-center mt-8 space-x-2">
        <div>
          <img
            className="w-[120px] h-[120px] rounded-full"
            src={leaf_icon}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-green-900 font-bold text-[66px]">
            Leaf Detector
          </h1>
        </div>
      </div>

      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", marginTop: "8px" }}
      >
        <Grid className='space-y-2' item xs={6} >
          <div>
            <p className=" text-green-950 text-[67.78px] font-sans font-semibold leading-tight">
              A Leaf expert at your fingertips.
            </p>
          </div>
          <div>
            <p className=" text-gray-600 text-[16.89px] font-semibold font-sans pt-6">
              Identify plants, flowers, cacti, succulents and mushrooms in
              seconds with the click of a button on your device.
            </p>
          </div>
          <div>
            <Button className='cursor-pointer' onClick={handleClick} sx={{ px: "2rem", py: "1rem", bgcolor: " #FFDE21" }}>
             <p className='font-semibold text-green-900'> Go To Detect</p>
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img className="h-full w-full object-cover" src={leaf_scan} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
