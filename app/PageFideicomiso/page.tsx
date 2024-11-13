import { Box } from "@mui/material";
import Header from "./Header";
import Descripcion from "./Descripcion";
import TradicionalDigital from "./TradicionalDigital";
import Video from "./Video";
import Beneficios from "./Beneficios";

export default function PageTokenizacion () {
    return (
        <Box>
            <Header />
            <Descripcion />
            <TradicionalDigital />
            <Video />
            <Beneficios />
        </Box>
    )
}