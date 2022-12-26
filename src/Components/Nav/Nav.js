import React, { useState } from "react";
import { Box, Button, Divider, Link } from "@mui/material";
import Marquee from "../Marquee/Marquee";
import "../../App.css";
import "animate.css";
import CustomButton from "../Buttons/CustomButton";
import Menu from "../Menu/Menu";
import "../../App.css";
import { Container } from "react-bootstrap";
import DropDownMenu from "../Menu/DropDownMenu";
const img_list = [
  {
    img:'./Assets/paper_plan.png'
  },
  {
  img: './Assets/twitter.png'

  },
  {
    img: './Assets/m_icon.png'
  }
]
const btn_titles = ['Home','NFTs','Gamification','Merchandise','App','TV','Future Star','Light Paper','Road Map','Tokenomics'];
function Nav() {
  const [showArrow, setShowArrow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const [connetWallet,setConnectWallet] = useState(false)
  const handleChange = ()=>{
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }
  return (
    <React.Fragment>
      <div
        id="NavBar"
        style={{
          background: "rgba(23, 24, 30, 0.5)",
          position: "fixed",
          zIndex: 5555555,
          width: "100%",
        }}
      >
        <div id="hiddenNav">
          <Box component="div" sx={{display:'flex',justifyContent:'space-between',}}>
          <Box>
            <img
              style={{
                background: "#FFFF00",
                padding: "5px",
                borderRadius: "25px",
              }}
              class="animate__animated animate__fadeInUp"
              width="50px"
              height="50px"
              src="./Assets/footie.png"
            />
            <CustomButton
              sx={{
                background: "#FFFF00",
                height: "30px",
                marginLeft: "5px",
                color: "black",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Buy $FOOTIE
            </CustomButton>
          </Box>
          <Box>
           {img_list.map((item)=>{
            return <button 
            style={{
              background:'none',
              border:'1px solid #FFFF00 ',
              margin:'5px',
              borderRadius:'20px',
              
            }}
            >
              <img width="10px" height="10px" src={item.img} alt="icon"/>
            </button>

           })}
           {isOpen ? <button onClick={()=>setIsOpen(false)} style={{background:'none',border:'none'}}>
            <img src="./Assets/close-window.png" alt="close icon" />
           </button>
           
          : 
          
            <button
            onClick={()=>setIsOpen(true)}
              style={{
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              <img src="./Assets/menu.png" alt="menu icon" />
            </button>
            
}
          </Box>
          </Box>
         
        {isOpen ? 
       <Box sx={{
        background:'white',
        
        zIndex:9997,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        
        marginTop:2,
        
        position:'relative',
      
       }} component="div">
        {btn_titles.map((item,index)=>{
          return(
            <Box sx={{width:"100%"}}>
            <Button sx={{color:'black',width:'100%',marginTop:1,textTransform:'none'}} key={index}>
              {item}
            </Button>
            <Divider sx={{background:'gray',height:'1px'}} />
            </Box>
          )

          
        })}


       <Button onClick={()=>setIsShow(!isShow)} sx={{width:'100%',color:'black',textTransform:"none"}}>
        Buy $FOOTIE 
        <img width="10px" height='10px' src="./Assets/arrow_down_black.png" alt="arrow icon" />
       </Button>
       <Divider sx={{background:'gray',width:'100%', height:"1px"}}/>
       {isShow ? 
      <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} component="div">
      <DropDownMenu menuItems={[{title:'PancakeSwap'},{title:'QuickSwap'},{title:'Coiniger'}]} />

      </Box>
      :
      null 
      }
       <Button onClick={()=>setConnectWallet(!connetWallet)}  sx={{width:'100%', color:"black",textTransform:'none'}}>
        Connect Wallet
        <img width="10px" height="10px" src="./Assets/arrow_down_black.png" alt="arrow icon" />
       </Button>
       {connetWallet ? 
       <Box
       sx={{width:'100%',display:'flex',flexDirection:'column'}}
       >
        <DropDownMenu menuItems={[{title:'Metamask',icon:<img width="25px" height="25px" src="./Assets/metamask.png" />},{title:'WalletConnet',icon:<img width="30px" height='20px' src="./Assets/WalletConnect.png" alt="Wallet Connet icon" />}]} />

       </Box>
       :
       null
       }
       </Box>
       : 
       null  
      }

        </div>


        <Marquee />
        <div
          id="visiableNav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            // flexWrap:'wrap',
            padding: "10px",
          }}
        >
          <Box sx={{ marginLeft: 10 }}>
            <img
              id="nav_logo"
              class="animate__animated animate__fadeInUp"
              width="120px"
              height="120px"
              src="./assets/footie.png"
            />
          </Box>
          <Box sx={{ }}>
            <nav>
              <ul>
                <li className="Nav">
                  <Link
                    className="Nav"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontSize: { lg: "18px", md: "14px" },
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="Nav">
                  <Link
                    className="Nav"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontSize: { lg: "18px", md: "14px" },
                    }}
                  >
                    NFTs
                  </Link>
                </li>

                <li className="Nav">
                  <Link
                    className="Nav"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontSize: { lg: "18px", md: "14px" },
                    }}
                  >
                    Gamification
                  </Link>
                </li>
                <li className="Nav">
                  <Link
                    className="Nav"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontSize: { lg: "18px", md: "14px" },
                    }}
                  >
                    Merchandise
                  </Link>
                </li>
                <li className="Nav">
                  <Link
                    className="Nav"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontSize: { lg: "18px", md: "14px" },
                    }}
                  >
                    App
                  </Link>
                </li>
                <li className="Nav">
                  <Link
                    className="Nav"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontSize: { lg: "18px", md: "14px" },
                    }}
                  >
                    TV
                  </Link>
                </li>
                <li className="Nav">
                  <Link
                    className="Nav"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontSize: { lg: "18px", md: "14px" },
                    }}
                  >
                    Future Stars
                  </Link>
                </li>
                <li
                  onMouseOver={() => setShowArrow(true)}
                  onMouseOut={() => setShowArrow(false)}
                  className="Nav"
                >
                  <Link
                    onMouseEnter={handleChange}
                    className="Nav"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontSize: { lg: "18px", md: "14px" },
                    }}
                  >
                    Menu
                    {showArrow ? (
                      <img
                        style={{ margin: "0px 0px 0px 10px" }}
                        width="12px"
                        height="12px"
                        src="./Assets/arrow_down_yellow.png"
                        alt="arrow down"
                      />
                    ) : (
                      <img
                        style={{ margin: "0px 0px 0px 10px" }}
                        width="12px"
                        height="12px"
                        src="./Assets/arrow_down_white.png"
                        alt="arrow down"
                      />
                    )}
                  </Link>
                  {showMenu ? (
                    <Box
                    onMouseLeave={()=>setShowMenu(false)}
                      sx={{
                        position: "absolute",
                        zIndex: 555555,
                        display:'flex',
                        flexDirection:'column',
                        background:"rgba(23, 24, 30, 0.5)",
                        width:'155px',
                        padding:'10px',
                        border:'1px solid white',
                        borderRadius:'10px',
                        marginTop:2
                      }}
                    >
                      <DropDownMenu
                        menuItems={[
                         {title: "LightPaper"},
                          {title:"Dextools"},
                          {title:"Poocoin"},
                          {title:"Telegram"},
                          {title:"Twitter"},
                          {title:"Discord"},
                        ]}
                      />
                    </Box>
                  ) : null}
                </li>
              </ul>
            </nav>
          </Box>
          <Box className="social_icon_container" sx={{ display: "flex",  }}>
            <Box>
              <Menu menuItems={["PanCakeSwap", "QuickSwap", "Conintiger"]} />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "140px",
                justifyContent: "space-around",
                flexWrap: "wrap",
                alignItems: "center",
                
              }}
            >
              <button
                style={{
                  border: "1px solid #FFFF00 ",
                  borderRadius: "30px",
                  padding: "6px",
                  width: "30px",
                  height: "30px",
                  background: "none",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <img
                style={{
                  position:'relative',
                  right:'2px'
                }}
                  width="18px"
                  height="16px"
                  src="./Assets/paper_plan.png"
                  alt="paper plan icon"
                />
              </button>

              <button
                style={{
                  border: "1px solid #FFFF00 ",
                  borderRadius: "30px",
                  padding: "6px",
                  width: "30px",
                  height: "30px",
                  background: "none",
                }}
              >
                <img
                style={{
                  position:'relative',
                  bottom:'5px'
                }}
                  width="18px"
                  height="16px"
                  src="./Assets/twitter.png"
                  alt="twitter icon"
                />
              </button>
              <button
                style={{
                  border: "1px solid #FFFF00",
                  borderRadius: "30px",
                  padding: "6px",
                  width: "30px",
                  height: "30px",
                  background: "none",
                }}
              >
                <img
                style={{
                  position:'relative',
                  bottom:'6px',
                  right:'1px'
                }}
                 width="18px" height="16px" src="./Assets/m_icon.png" />
              </button>
            </Box>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
