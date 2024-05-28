import React from 'react';
import Navbar from '../../components/Navbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Typewriter from 'typewriter-effect';


//import themes
import { projectTheme } from '../../themes/colortheme';

//import assets
import  HeaderCircle  from '../../assets/square_circle.svg';

const useStyles = makeStyles(theme => ({
    headerText: {
       paddingTop: "14rem",
	   ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
		paddingTop: "20rem",
		marginRight: "1rem",
		paddingLeft: "2rem"
	  }
    },
	headerRoot: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
			paddingLeft: "2rem"
		  }
	}

}));

const Header = () => {

	const classes = useStyles();

    return(
        <div className='header'>
            <Navbar />
            <ThemeProvider theme={projectTheme}>
				<Paper sx ={{background: '#F9F9FF', height: '400px'}} elevation={0}>
					<Stack spacing={2}>
						<Typography 
							component="div"
							className={classes.headerRoot}
						>
							<Box sx ={{
								position: 'absolute',
								mt: '4rem',
								ml: '-42%',
								zIndex: 2,
							}}>
								<img src={HeaderCircle} alt="Round circle" />
							</Box>
							<Box 
								sx={{
									position: 'absolute',
									pt: '6rem',
									zIndex: 10
								}}
							>
								<Typography 
									variant='h3'
									sx={{
										fontWeight: 800,
										lineHeight: '5rem',
										color: 'text.grey',
										}}
									> 
									Revolutionizing the way you
								</Typography>
									<Box sx={{display: 'flex', justifyContent: 'center'}}>
										<Typography
											variant='h3'
											sx={{
												fontWeight: 800,
												lineHeight: '5rem',
												backgroundImage: `linear-gradient(90deg, #3A42CD 0%, #0085ff 100%)`,
												backgroundSize: "100%",
												backgroundRepeat: "repeat",
												backgroundClip: "text",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor: "transparent",
												}} 
										>
											<Typewriter
											options={{
												strings: ['Hire', 'Switch Jobs', 'Find Jobs'],
												autoStart: true,
												loop: true,
											}}
											/>
										</Typography>
									</Box> 
							</Box>
							<Box 
								sx ={{
									position: 'absolute',
									mt: '4rem',
									ml: '42%',
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
								
							}}
							className={classes.headerText}
						>
							<Typography variant='body1'
							sx ={{
								color: 'text.grey',
							}}
							>
							Trooven is a platform that makes easier to find verified and urgent hires.
						</Typography>
						</Box>
					</Stack>
				</Paper>
            </ThemeProvider>
        </div>
    );
}

export default Header;