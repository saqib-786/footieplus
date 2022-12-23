import { Typography } from '@mui/material'
import React from 'react';
import '../../App.css';

export const TypoHeading = ({children,...otherProps}) => {
  return (
    <React.Fragment>
    <Typography
    className="typoHeading"
    {...otherProps}
    >
        {children}
    </Typography>
    </React.Fragment>
  )
}
