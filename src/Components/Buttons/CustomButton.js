import React from 'react';
import { Button } from '@mui/material';

function CustomButton({children,...restProps}) {
            
    return ( 
        <>
            <Button
            {...restProps}
            >
                {children}
           
            </Button>

        </>
     );
}

export default CustomButton;