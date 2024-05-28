import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider} from '@mui/material/styles';

//import themes
import { projectTheme } from '../themes/colortheme';

//import assets
import Logo from "../assets/logo.svg";
import ThemeButton from './ThemeButton';

const pages = ['Home', 'About Us', 'Contact Us']

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return(
        <div className='navbar'>
          <ThemeProvider theme={projectTheme}>
            <AppBar position='static' color='background' elevation={0} >
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Box sx={{
                    display: { xs: 'none', md: 'flex' }, mr: 1
                    }}
                  >
                    <img src={Logo} alt="Trooven Logo"/>
                  </Box>
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                          display: { xs: 'block', md: 'none' },
                      }}
                    >
                      {pages.map((page) => (
                          <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" sx={{color: 'text.grey'}}>{page}</Typography>
                          </MenuItem>
                      ))}
                    <Box sx={{  display: {xs: 'flex', md: 'none'} }}>
                        <ThemeButton text="Log In"/>
                        <ThemeButton text="Sign Up"/>
                    </Box>
                    </Menu>
                  </Box>
                  <Box sx={{
                    display: { xs: 'flex', md: 'none', justifyContent: 'center', alignItems: 'center' }, mr: 1
                    }}
                  >
                    <img src={Logo} alt="Trooven Logo"/>
                  </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center'},   }}>
                      {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color:'text.grey', display: 'block', }}
                      >
                        {page}
                      </Button>
                      ))}
                    </Box>  
                    <Box sx={{  display: {xs: 'none', md: 'flex'} }}>
                        <ThemeButton text="Log In"/>
                        <ThemeButton text="Sign Up"/>
                    </Box>
                </Toolbar>
              </Container>
            </AppBar> 
          </ThemeProvider>   
        </div>
    );
}

export default Navbar;