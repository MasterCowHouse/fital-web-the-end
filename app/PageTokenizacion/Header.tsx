"use client";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { customTheme } from "../PageContacto/Header";
import { FormEvent, useState } from "react";
import { createContact } from "../services/contact";
import Swal from "sweetalert2";

interface CustomVideo {
  id: number;
  video: string;
}

const customVideo: CustomVideo[] = [
  {
    id: 1,
    video: "/img/Tokenizacion.gif",
  },
];

const Header = () => {
  const outerTheme = useTheme();
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // end modal

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
        campaign_id: "ae520039-58be-4851-9dfc-882dce2755e1",
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
        handleClose();
        Swal.fire({
          title: "¡Registro exitoso!",
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
          text: "No se pudo completar el registro.",
          icon: "error",
        });
      }
      console.log(response?.data, response);
    })();
  };

  return (
    <Box>
      {customVideo.map(({ video }, id) => (
        <Box
          key={id}
          sx={{
            bgcolor: "black",
            backgroundImage: `url(${video})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: {
              xs: "center center",
              sm: "200px center",
              md: "200px center",
              lg: "200px center",
            },
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: {
              xs: "center",
              sm: "start",
              md: "start",
              lg: "cetert",
            },
            justifyContent: {
              xs: "start",
              sm: "center",
              md: "center",
              lg: "center",
            },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              marginLeft: { xs: "0px", sm: "0px", md: "130px", lg: "130px" },
              padding: {
                xs: "150px 0px 0px 20px",
                sm: "0px 20px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "43px", sm: "43px", md: "63px", lg: "63px" },
              }}
            >
              Tokeniza tus Inmuebles:
              <br />
              El futuro del mercado
              <br />
              inmobiliario con FITAL
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { xs: "0px", sm: "20px", md: "130px", lg: "130px" },
              marginTop: { xs: "50px", sm: "50px", md: "50px", lg: "50px" },
            }}
            onClick={handleOpen}
          >
            <Box
              sx={{
                border: "2px solid #FFC72C",
                padding: "20px 30px",
                borderRadius: "100px",
              }}
            >
              Empieza ahora
            </Box>
          </Box>
        </Box>
      ))}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#FFFFFF",
                textAlign: "center",
                mb: 3,
              }}
            >
              ¡Regístrate ahora y comienza a comprar tokens inmobiliarios!
            </Typography>
            {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
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
        </Fade>
      </Modal>
    </Box>
  );
};

export default Header;

// Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#210044",
  boxShadow: 24,
  p: 4,
};
