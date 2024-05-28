import { createTheme } from '@mui/material/styles';

export const projectTheme = createTheme ({
    palette: {
      background: {
        main: '#F9F9FF',
      },
      text: {
        grey: '#555772',
        blue: '#3A42CD',
        blue_gradient: 'linear-gradient(90deg, #3A42CD 0%, #0085ff 100%)' 
      }
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: '1rem',
              textTransform: 'none'
            },
          },
        },
      },
  })

  export const buttonTheme = createTheme({
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: '1rem',
              textTransform: 'none',
              borderColor: '#3A42CD',
              borderRadius: '15px',
              color: '#ffffff',
              background: '#3A42CD',
              '&:hover': {
                background: '#3A42CD',
              }
            },
          },
        },
      },
      palette: {
        background: {
          main: '#F9F9FF',
        },
        text: {
          grey: '#555772',
          blue: '#3A42CD',
          blue_gradient: 'linear-gradient(90deg, #3A42CD 0%, #0085ff 100%)' 
        }
      }
  })