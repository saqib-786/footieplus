import React from "react";
import { Typography, Box, ButtonGroup } from "@mui/material";
import CustomButton from "../Buttons/CustomButton";
import { FootieLogo, FootieText } from "../CustomImages";
import { TypoHeading } from "../CustomText";

export const Slide_3 = () => {
  return (
    <>
      <div className="slide_2 ">
        <FootieLogo
          style={{
            position: "relative",
            top: 100,
          }}
          className=" animate__delay-1s	1s animate__animated animate__fadeInLeft"
          width="300px"
          height="300px"
          src="./Assets/footie.png"
          alt="icon"
        />

        <FootieText
          src="./Assets/Footie-Text.png"
          width="800px"
          heigh="120px"
          class="animate__delay-1s	1s animate__animated animate__fadeInUp"
          style={{
            position: "relative",
            bottom: 20,
            right: 40,
          }}
        />
        <TypoHeading
          sx={{
            color: "white",
            fontSize: "60px",
            fontWeight: 500,
            marginBottom: 10,
          }}
        >
          Everything Football On Blockchain
        </TypoHeading>
        <ButtonGroup className="btnGroup">
          <CustomButton
            sx={{
              color: "#FFFF00",
              width: "200px",
              border: "2px solid #FFFF00",
              borderRadius: "0",
              textTransform: "none",
              fontSize: "18px",
              fontWeight: 400,
              "&:hover": {
                border: "2px solid #FFFF00",
                color: "#FFFF00",
              },
            }}
            variant="outlined"
          >
            Telegram
            <img
              style={{
                marginLeft: "5px",

                // background:"#FFFF00"
              }}
              width="16px"
              height="16px"
              src="./Assets/paper_plan.png"
              alt="paper plan icon"
            />
          </CustomButton>
          <CustomButton
            sx={{
              color: "black",
              width: "200px",
              backgroundColor: "#FFFF00",
              borderRadius: "0",
              textTransform: "uppercase",
              fontSize: "18px",
              fontWeight: 400,
              "&:hover": { backgroundColor: "#FFFF00" },
            }}
          >
            Buy $Footie
            <img
              style={{ margin: "3px 0px 0px 5px" }}
              width="12px"
              height="12px"
              src="./Assets/arrow_down_black.png"
              alt="icon"
            />
          </CustomButton>
          <CustomButton
            sx={{
              color: "#FFFF00",
              width: "210px",
              border: "2px solid #FFFF00",
              borderRadius: "0",
              textTransform: "none",
              fontSize: "18px",
              fontWeight: 400,
              "&:hover": { border: "2px solid #FFFF00 " },
            }}
          >
            How to Buy FOOTIE
            <img
              style={{ marginLeft: "2px" }}
              src="./Assets/cart.png"
              alt="cart icon"
            />
          </CustomButton>
        </ButtonGroup>
        <Typography
        className="para"
        sx={{
          color: "white",
            textAlign: "center",
            fontSize: "20px",
            width: "90%",
            fontWeight: 400,
            marginTop: 5,
        }}
        >
          As our community grows our team will be offering unique shopping
          experiences through blockchain backed sales of our own branded
          merchandise which will include gaming tokens, collectibles, NFTs,
          apparel among others, all supported by the $FOOTIE coin offering
          increased real-world applications and utilities for our governance
          coin while offering profit opportunities to our community supply
          chain.
        </Typography>
        <img
       className="animate__delay-1s	1s animate__animated animate__fadeInRight "
         style={{
          position:'absolute',
          left:'1150px',
          top:'200px',
          zIndex:55555
        }} width="50%" height="80%" src="./Assets/Player.png" />
      </div>
    </>
  );
};

export default Slide_3;
