import React from 'react';
import  Button  from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

//import themes
import { buttonTheme } from '../themes/colortheme';

const ThemeButton = ( {text} ) => {

    return (
        <div className='blue_button'>
            <ThemeProvider theme={buttonTheme}>
                <Button 
                 sx={{
                  mr: 2
                 }}
                 variant="outlined"
                >
                  {text}
                </Button>
            </ThemeProvider>
        </div>
    );
}

export default ThemeButton;