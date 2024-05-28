import React from 'react';

//material ui imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { ThemeProvider} from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

//import assets
import Logo from "../assets/logo_sm.svg";

//themes import 
import { projectTheme } from '../themes/colortheme';


const Footer = () => {
    return(
        <div className='footer'>
            <Box sx={{mt: 10,}}>
                <ThemeProvider theme={projectTheme}>
                    <Paper
                        sx={{
                            background: '#071021'
                        }}
                    >
                        <Grid container spacing={4} sx={{ p: 5}}>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={4}>
                                    <img src={Logo} sx={{width: '300px'}} alt="Logo" />
                                    <Stack direction='row' spacing={2}>
                                        <LinkedInIcon sx={{color: '#ffffff'}} />
                                        <TwitterIcon sx={{color: '#ffffff'}} />
                                    </Stack>
                                    <Stack>
                                    <Typography variant="h6" sx={{color: '#ffffff'}}>
                                        © 2023 Trooven | All rights reserved
                                    </Typography> 
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Paper>
                </ThemeProvider>
            </Box>
        </div>
    );
}

export default Footer;