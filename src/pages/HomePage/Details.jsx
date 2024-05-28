import React from 'react';

//material ui imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import  Typography  from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

//import assets
import ProfileCard from "../../assets/profile_card.svg";
import ProfileCreate from "../../assets/profile_create.svg";
import  HeaderCircle  from '../../assets/square_circle.svg'


//import themes
import { buttonTheme } from '../../themes/colortheme';
import ThemeButton from '../../components/ThemeButton';

const useStyles = makeStyles(theme => ({
    paperRoot: {
        color: "red",
    },
    gridBox: {
        padding: "4rem",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            padding: "1rem"
          }
    },
    boxRoot: {
        marginLeft: "6rem",
        marginRight: "6rem",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            marginLeft: "1rem",
            marginRight: "1rem",
          }
    },
    profileCard: {
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            paddingTop: "7rem",
            marginTop: "0rem",
        }
    },
    headerCircle: {
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            marginLeft: "0rem",
        }
    },
    firstPaper: {
        width: '26rem', 
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '24rem',
        }
    },
    secondPaper: {
        width: '22rem', 
        height: "16rem",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '24rem',
        }
    },

}));

const Details = () => {

    const classes = useStyles();

    return(
        <div className='details'>
            <ThemeProvider theme={buttonTheme}>
                <Box className={classes.boxRoot}>
                    <Paper elevation={2}>
                        <Box className={classes.gridBox}>
                            <Grid container spacing={10}>
                                <Grid xs={12} md={6}>
                                    <Stack spacing={4}>
                                        <Typography variant="h4" sx={{color: 'text.grey'}}>
                                            Find the BEST candidate
                                        </Typography >
                                        <Typography variant="body1" sx={{color: 'text.grey'}}>
                                            Recruiters can apply filters for a particular post and find hundreds of
                                            candidates with all the important and verified information condensed into one card.
                                            This will make the hiring process extremely smooth.
                                        </Typography>
                                        <ThemeButton text="Sign up as a Recruiter" />
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <Paper 
                                        sx ={{
                                            background: '#F9F9FF', 
                                            borderRadius: '2rem'
                                        }} 
                                        className={classes.firstPaper}
                                        elevation={0}
                                    >
                                        <Stack spacing={2}>
                                            <Typography 
                                                component="div"
                                                sx={{
                                                    position: 'relative',
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Box sx ={{
                                                    position: 'absolute',
                                                    mt: '16rem',
                                                    ml: '-92%',
                                                    zIndex: 2,
                                                }}
                                                className={classes.headerCircle}
                                                >
                                                    <img src={HeaderCircle} style={{maxWidth: '100%'}} alt="Round circle" />
                                                </Box>
                                                <Box 
                                                    sx={{
                                                        position: 'absolute',
                                                        pt: '-9rem',
                                                        mt: '-9rem',
                                                        zIndex: 10
                                                    }}
                                                    className={classes.profileCard}
                                                >
                                                    <img src={ProfileCard} style={{maxWidth: '80%'}} alt="Profile card" />

                                                </Box>
                                                <Box 
                                                    sx ={{
                                                        position: 'absolute',
                                                        mt: '-3rem',
                                                        ml: '100%',
                                                        zIndex: 2,
                                                    }}
                                                    className={classes.headerCircle}
                                                >
                                                    <img src={HeaderCircle} alt="Round circle" />
                                                </Box>						
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    pt: 32
                                                }}
                                            >
                                            </Box>
                                        </Stack>
				                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid container spacing={10} sx={{pt: '10rem'}}>
                                <Grid xs={12} md={6}>
                                    <Paper 
                                        sx ={{
                                            background: '#F9F9FF', 
                                            borderRadius: '2rem'
                                        }} 
                                        className={classes.secondPaper}
                                        elevation={0}
                                    >
                                        <Stack spacing={2}>
                                            <Typography 
                                                component="div"
                                                sx={{
                                                    position: 'relative',
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Box sx ={{
                                                    position: 'absolute',
                                                    mt: '14rem',
                                                    ml: '-92%',
                                                    zIndex: 2,
                                                }}
                                                >
                                                    <img src={HeaderCircle} alt="Round circle" />
                                                </Box>
                                                <Box 
                                                    sx={{
                                                        position: 'absolute',
                                                        mt: '-4rem',
                                                        ml: '4rem',
                                                        zIndex: 10
                                                    }}
                                                >
                                                    <img src={ProfileCreate} style={{maxWidth: '80%'}} alt="Profile create" sx={{width: "60%"}} />

                                                </Box>
                                                <Box 
                                                    sx ={{
                                                        position: 'absolute',
                                                        mt: '-3rem',
                                                        ml: '100%',
                                                        zIndex: 2,
                                                    }}
                                                >
                                                    <img src={HeaderCircle} alt="Round circle" />
                                                </Box>						
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    pt: 32
                                                }}
                                            >
                                            </Box>
                                        </Stack>
				                    </Paper>
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <Stack spacing={4}>
                                        <Typography variant="h4" sx={{color: 'text.grey'}}>
                                            Get the right Exposure and Find, Switch jobs with ease
                                        </Typography >
                                        <Typography variant="body1" sx={{color: 'text.grey'}}>
                                            Increase your reach to the recruiters, Sign up aby filling some basic information, get verified, sit back and relax.
                                        </Typography>
                                        <ThemeButton text="Sign up as a candidate" />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Box>
            </ThemeProvider>
        </div>

    );
}

export default Details;