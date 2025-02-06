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
import { createContact } from "../../services/contact";
import Swal from "sweetalert2";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Contact");

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
        campaign_id: "65eda65a-38fa-4e55-837b-42555ca311a1",
        name: formData.name,
        description: "",
      },
      createContactDto: {
        name: formData.name,
        telephone: formData.telephone,
        email: formData.email,
      },
    };

    (async () => {
      const response = await createContact(payload);
      if (response?.success) {
        Swal.fire({
          title: t("form.success"),
          icon: "success",
        });
        setFormData({
          owner_id: "",
          campaign_id: "",
          name: "",
          telephone: "",
          email: "",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: t("form.error"),
          icon: "error",
        });
      }
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
            padding: "0px 0px 20px 0px",
            textAlign: "center",
          }}
        >
          {t("title")}
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            padding: "0px 0px 30px 0px",
          }}
        >
          {t.raw("description")[0]}
          <br />
          {t.raw("description")[1]}
        </Typography>
      </Box>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label={t("form.name")}
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
            label={t("form.telephone")}
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
            label={t("form.email")}
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
            {t("button")}
          </Button>
        </form>
      </ThemeProvider>
    </Box>
  );
};

export default Header;
