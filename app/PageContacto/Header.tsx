'use client'
import { Box, TextField, Typography } from "@mui/material";
//TextField
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
//TextField
const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#FFC72C',
            '--TextField-brandBorderHoverColor': '#FFC72C',
            '--TextField-brandBorderFocusedColor': '#FFC72C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',              
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

  interface CustomFormContact {
    id: number;
    nombre: string;
  }

  const customFormContact: CustomFormContact[] = [
    {
        id: 1,
        nombre: 'Nombre'
    },
    {
        id: 2,
        nombre: 'Apellido materno'
    },
    {
        id: 3,
        nombre: 'Apellido paterno'
    },
    {
        id: 4,
        nombre: 'Teléfono'
    },
    {
        id: 5,
        nombre: 'E-mail'
    },
  ]

const Header = () => {
    // TextField
    const outerTheme = useTheme();
    return (
        <Box sx={{
            marginTop: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Box>
                <Typography sx={{
                    fontSize: '50px',
                    padding: '0px 0px 50px 0px'
                }}>
                    Regístrate
                </Typography>
            </Box>
            <ThemeProvider theme={customTheme(outerTheme)}>
                {customFormContact.map(({nombre}, id) => (
                    <Box key={id} sx={{
                        padding: '25px'
                    }}>
                        <TextField 
                            label={nombre}
                            InputLabelProps={{
                                sx: {
                                    color: "white"
                                }
                            }}
                            inputProps={{
                                sx: {
                                    color: 'white'
                                }
                            }}
                            sx={{
                                // width: '400px',
                                width: {xs: '100%', sm: '400px', md: '400px', lg: '400px',},
                            }}
                        />
                    </Box>
                ))}
                <Box sx={{
                    padding: '25px'
                }}>
                    <Button sx={{
                        backgroundColor: '#FFC72C',
                        color: '#7F4CA5',
                        // width: '400px',
                        width: {xs: '200px', sm: '400px', md: '400px', lg: '400px',},
                        
                    }}
                    className="normal-case"
                    >
                        Regístrate
                    </Button>
                </Box>
            </ThemeProvider>
        </Box>
    )
}

export default Header