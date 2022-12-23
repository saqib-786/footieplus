import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";


function Footer() {
  const [showEnvelop, setShowEnvelop] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <React.Fragment>
      <div style={{ background: "black" }}>
        <Container
          maxWidth="lg"
          sx={{
            
            paddingTop: 5,
          }}
        >
          <Box>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
              
              }}
            >
              Join Our Mailing list Today!
            </Typography>
            {/* <OutlinedInput sx={{backgroundColor:'revert'}}/> */}
          </Box>
          <Box
            sx={{
              
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {showEnvelop ? (
              <img
                onMouseLeave={() => setShowEnvelop(false)}
                src="./Assets/envelop_gray.png"
                alt="envelop icon"
              />
            ) : (
              <img
                onMouseOver={() => setShowEnvelop(true)}
                src="./Assets/envelop_yellow.png"
                alt="envelop icon"
              />
            )}
            <Typography
              sx={{
                color: "#FFFF00",
                fontSize: "16px",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Info@footieplus
            </Typography>
            <img
              style={{ marginTop: "10px" }}
              width="100px"
              height="100px"
              src="./Assets/footie.png"
            />

            <Box
              sx={{
                marginTop: 2,
                width: "5%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button>
                <img width="24px" height="24px" src="./Assets/paper_plan.png" />
              </Button>
              <Button>
                <img width="24px" height="24px" src="./Assets/m_icon.png" />
              </Button>
              <Button>
                <img width="24px" height="24px" src="./Assets/twitter.png" />
              </Button>
            </Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                marginTop: 1,
                color: "#FFFF00",
              }}
            >
              Footie Plus &#169; Copyright 2021 | All rights Reserved.
            </Typography>
          </Box>
          </Box>
        

          
          
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Footer;
