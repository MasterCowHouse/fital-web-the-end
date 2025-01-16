import { Box } from "@mui/material";
import Header from "../fideicomiso-digital-beneficios/Header";
import Articulo from "./Articulo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diferencia entre Wallet y App Bancaria",
  description:
    "Descubre las diferencias clave entre una wallet y una app bancaria. Aprende cómo funcionan, qué beneficios ofrecen y cuál es la mejor opción para tus necesidades financieras.",
};

export default function diferenciaWalletAppBancaria() {
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
