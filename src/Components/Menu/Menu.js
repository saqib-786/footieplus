import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CustomButton from "../Buttons/CustomButton";
import { Box } from "@mui/system";

export default function PositionedMenu({ menuItems = [] }) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [dropDown, setDropDown] = React.useState(false);

  
  const handleChange = () => {
   dropDown ? setDropDown(false) : setDropDown(true)



  };
 
  

  return (
    <>
      <div>
        <CustomButton
        onMouseEnter={handleChange}
        
          sx={{
            background: "#FFFF00",
            width: { lg: "180px", md: "150px" },
            height: { lg:'60px',md:"50px",sm:'40px', xs:"40px" },
            borderRadius: "0px",
            fontSize: { lg: "20px", md: "16px" },
            color: "black",
            fontWeight: 400,
            "&:hover": { background: "#FFFF00" },
            padding: "10px",
          }}
          
          variant={"contained"}
        >
          Buy $Footie
          <img
            style={{ margin: "12px 0px 10px 5px" }}
            width="12px"
            height="12px"
            src="./Assets/arrow_down_black.png"
            alt="arrow down"
          />
        </CustomButton>

      
      </div>
      {dropDown ? (
        <Box
        onMouseLeave={()=>setDropDown(false)}

          sx={{
            zIndex: 555555,
            position: "absolute",
            color: "white",
            backgroundColor: "rgba(23, 24, 30, 0.5)",
            width:{lg:'180px',md:'150px'},
            display:'flex',
            flexDirection:'column',
            padding:'10px',
            borderRadius: menuItems.length > 3 ? '10px' : '0px',
            border: menuItems.length > 3 ? '1px solid white' : 'none'
          }}
        >
          {menuItems.map((item, index) => {
            return (
              <Button 
              sx={{
                color:'black',
                backgroundColor:'#FFFF00',
                margin:'10px',
                '&:hover':{backgroundColor:"rgb(23, 24, 30,0.5),",color:"white"},
                padding:'10px',
                borderRadius:'0px',
                
              }} key={index}>
                {item}
              </Button>
            );
          })}
        </Box>
      ) : null}
      {/* <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{zIndex:555555555,width:'300px'}}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}
    </>
  );
}
