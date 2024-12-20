"use client";
import { Box, TextField, Typography } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";
import Button from "@mui/material/Button";
import { FormEvent, useState } from "react";
import { createContact, DataContact } from "../services/contact";

export const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#FFC72C",
            "--TextField-brandBorderHoverColor": "#FFC72C",
            "--TextField-brandBorderFocusedColor": "#FFC72C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const Header = () => {
  const outerTheme = useTheme();
  const [formData, setFormData] = useState({
    owner_id: "",
    campaign_id: "",
    name: "",
    telephone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      createLeadDto: {
        owner_id: "7c1e8371-047e-44d5-b123-1b40775346fc",
        campaign_id: "b31b9c1e-d80d-4307-9960-b948fac4ed94",
      },
      createContactDto: {
        name: formData.name,
        telephone: formData.telephone,
        email: formData.email,
      },
    };

    (async () => {
      const response = await createContact(payload);
      console.log(response?.data, response);
    })();
  };

  return (
    <Box
      sx={{
        marginTop: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "50px",
            padding: "0px 0px 50px 0px",
          }}
        >
          Regístrate
        </Typography>
      </Box>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre del Contacto"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ mb: 4 }}
            InputLabelProps={{
              sx: {
                color: "white",
              },
            }}
            inputProps={{
              sx: {
                color: "white",
              },
            }}
          />
          <TextField
            fullWidth
            label="Teléfono"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            type="tel"
            sx={{ mb: 4 }}
            InputLabelProps={{
              sx: {
                color: "white",
              },
            }}
            inputProps={{
              sx: {
                color: "white",
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            sx={{ mb: 4 }}
            InputLabelProps={{
              sx: {
                color: "white",
              },
            }}
            inputProps={{
              sx: {
                color: "white",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Enviar
          </Button>
        </form>
      </ThemeProvider>
    </Box>
  );
};

export default Header;
