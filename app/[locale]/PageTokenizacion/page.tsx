import { Box } from "@mui/material";
import ServiciosVideo from "./ServiciosVideo";
import ServiciosVideoDos from "./ServiciosVideoDos";
import EtapasTokenizacion from "./EtapasTokenizacion";
import Descripcion from "./Descripcion";
import ERC from "./ERC";
import Header from "./Header";
import Ventajas from "./Ventajas";
// import Suscripciones from "./Suscripciones";
import QuieresSerParteDeFital from "./QuieresSerParteDeFital";

export default function PageTokenizacion() {
  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      <Header />
      <Descripcion />
      <ServiciosVideo />
      <Ventajas />
      <ERC />
      <ServiciosVideoDos />
      <EtapasTokenizacion />
      {/* <Suscripciones /> */}
      <QuieresSerParteDeFital />
    </Box>
  );
}
