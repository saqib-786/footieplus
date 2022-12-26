import React from "react";
import { Typography, Box, ButtonGroup } from "@mui/material";
import CustomButton from "../Buttons/CustomButton";
import { FootieLogo, FootieText } from "../CustomImages";
import { TypoHeading } from "../CustomText";

export const Slide_1 = () => {
  return (
    <>
      <div className="slide_1">
        <FootieLogo
          className="animate__delay-1s	1s animate__animated animate__fadeInLeft"
          style={{
            position: "relative",
            top: 100,
          }}
          src="./Assets/footie.png"
          width="300px"
          height="300px"
        />

        <FootieText
          src="./Assets/Footie-Text.png"
          width="800px"
          height="120px"
          className="animate__delay-1s	1s animate__animated animate__fadeInUp"
          style={{
            position: "relative",
            bottom: 20,
            right: 40,
          }}
        />
        <TypoHeading
          sx={{
            color: "white",
            fontSize: {lg:'60px',md:'40px'},
            fontWeight: 500,
          }}
        >
          Everything Football On Blockchain
        </TypoHeading>
        <Box sx={{ marginTop: 5 }}>
          <ButtonGroup className="btnGroup">
            <CustomButton
              sx={{
                color: "#FFFF00",
                width: '200px',
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
                width: '200px',
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
                width:'210px',
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
        </Box>
        <Typography
        className='para'
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "20px",
            width: "90%",
            fontWeight: 400,
            marginTop: 5,
          }}
        >
          Footie Plus offers a unique multichain platform that leverages on the
          full power of blockchain to bring a new level of engagement for, fans,
          players, future stars, clubs and investors. Through our Footie Plus :
          NFTs, App, Gamification, Future Stars, Tv/Media, Merchandise,
          Foundation and the $FOOTIE governance coin we are on a mission to
          bring a new dimension to football.
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
export default Slide_1;
