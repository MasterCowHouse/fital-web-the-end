import { Box } from "@mui/material";
import Header from "../fideicomiso-digital-beneficios/Header";
import Articulo from "./Articulo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Diferencias entre la Venta Tradicional de Inmuebles y la Tokenización",
  description:
    "Descubre las diferencias clave entre la venta tradicional de inmuebles y la tokenización. Conoce cómo la tecnología blockchain está transformando el mercado inmobiliario y ofreciendo nuevas oportunidades para inversionistas.",
};

export default function diferenciaEntreVentaTradicionalDeInmueblesyTokenizacionDeInmuebles() {
  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      <Header />
      <Articulo />
    </Box>
  );
}
