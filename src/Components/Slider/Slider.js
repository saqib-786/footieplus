



import { ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../App.css";
import CustomButton from "../Buttons/CustomButton";
import Carousel from 'react-bootstrap/Carousel';
import { Slide_1, Slide_2, Slide_3,Slide_4,Slide_5,Slide_6 } from "../Slides";
import { CarouselItem } from "react-bootstrap";



function Slider() {
  return (
    <React.Fragment>
      {/* <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item slide_1 active">
            <img
              style={{
                position: "relative",
                top: 100,
              }}
              class="animate__animated animate__fadeInLeft"
              width="300px"
              height="300px"
              src="./Assets/footie.png"
            />

            <img
              src="./Assets/Footie-Text.png"
              width="800px"
              height="120px"
              class="animate__animated animate__fadeInUp"
              style={{
                position: "relative",
                bottom: 20,
                right: 40,
              }}
            />
            <Typography
              sx={{
                color: "white",
                fontSize: "60px",
                fontWeight: 500,
              }}
            >
              Everything Football On Blockchain
            </Typography>
            <Box sx={{ marginTop: 5 }}>
              <ButtonGroup>
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
                        marginLeft:"5px",
                        
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
                <img style={{marginLeft:'2px'}} src="./Assets/cart.png" alt="cart icon" />
               </CustomButton>
              </ButtonGroup>
            </Box>
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: "20px",
                width: "90%",
                fontWeight: 400,
                marginTop: 5,
              }}
            >
              Footie Plus offers a unique multichain platform that leverages on
              the full power of blockchain to bring a new level of engagement
              for, fans, players, future stars, clubs and investors. Through our
              Footie Plus : NFTs, App, Gamification, Future Stars, Tv/Media,
              Merchandise, Foundation and the $FOOTIE governance coin we are on
              a mission to bring a new dimension to football.
            </Typography>
          </div>
          <div class="carousel-item slide_2 ">
            <img
              class="animate__animated animate__fadeInLeft"
              width="300px"
              height="300px"
              src="./Assets/footie.png"
              alt="icon"
            />
            <img
              src="./Assets/Footie-Text.png"
              width="800px"
              height="120px"
              class="animate__animated animate__fadeInUp"
              style={{
                position: "relative",
                bottom: 60,
                right: 20,
              }}
            />
          </div>
          <div class="carousel-item slide_3">
            <img
              class="animate__animated animate__fadeInLeft"
              width="300px"
              height="300px"
              src="./Assets/footie.png"
            />
            <h1>Hello</h1>
            <img
              src="./Assets/Footie-Text.png"
              width="800px"
              height="120px"
              class="animate__animated animate__fadeInUp"
              style={{
                position: "relative",
                bottom: 60,
                right: 20,
              }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span style={{ backgroundColor: "red" }} class="visually-hidden">
            Previous
          </span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
 <Carousel className="custom_slider">
      <Carousel.Item>
        <Slide_1/>
      </Carousel.Item>
      <Carousel.Item>
        <Slide_2/>
      </Carousel.Item>
      <Carousel.Item>
      <Slide_3/>
      </Carousel.Item>
      <CarouselItem>
        <Slide_4/>
      </CarouselItem>
      <CarouselItem>
        <Slide_5/>
      </CarouselItem>
      <CarouselItem>
        <Slide_6/>
      </CarouselItem>
    </Carousel>

    </React.Fragment>
  );
}

export default Slider;
