import { Box } from "@mui/material";
import Header from "../fideicomiso-digital-beneficios/Header";
import Articulo from "./Articulo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Claves para Invertir en Bienes Raíces con Criptomonedas y Tokenización Inmobiliaria",
  description:
    "Aprende cómo invertir en bienes raíces con criptomonedas y descubre claves esenciales para hacerlo de forma segura. Con FITAL, compra tokens inmobiliarios respaldados por fideicomisos digitales usando Bitcoin, USDT o FitalCoin.",
};

export default function clavesInvertirBienesRaicesCriptomonedas() {
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
