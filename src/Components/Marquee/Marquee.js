import React from 'react';
import {Container } from '@mui/material';
import '../../App.css'
function Marquee() {
    return (  
        <React.Fragment>
           <div id='marquee'
           style={{
            display:'flex',
            alignItems:'center',
            background: "rgba(0, 0, 0, 0.5)",
            padding:'5px',
            height:'40px'
            
           
           
           }}
          
           >
           <marquee scrollamount='15'
          
           vspace="10"
          
           
           

           >
               <span className='marquee'> FOOTIE Plus offers a unique multichain platform that </span>
               <span className='marquee'> leverages on the full power of blockchain </span>
               <span className='marquee'> stars, clubs and investors, We are on a mission </span>
               <span className='marquee'>  to bring a new dimension to football</span>
               <span className='marquee'> to bring a new level of engagement for, fans, players, future  </span>
           </marquee>
           </div>

        </React.Fragment>
    );
}

export default Marquee;