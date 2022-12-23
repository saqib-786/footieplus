import React from 'react'
import { Button } from '@mui/material'

export default function DropDownMenu({menuItems=[]}) {
  return (
    <>
    {menuItems.map((item,index)=>{
        return <Button
        sx={{
            backgroundColor:'#FFFF00',
            marginBottom:'5px',
            '&:hover':{backgroundColor:'#FFFF00 '},
            color:"black",
            fontWeight:500,
            textTransform:'none'
        }}
        key={index}>
          {item.icon && item.icon }
          {item.title}
        
        </Button>
    })}
    </>
  )
}
