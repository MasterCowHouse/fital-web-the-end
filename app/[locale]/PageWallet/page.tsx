import { Box } from "@mui/material";
import Header from "./Header";
import ImgHeader from "./ImgHeader";
import SeccionUnoAmarillo from "./SeccionUnoAmarillo";
import Video from "./Video";

export default function PageWallet () {
    return (
        <Box sx={{
            color: 'white'
        }}>
            <Header />
            <ImgHeader />
            <SeccionUnoAmarillo />
            <Video />
        </Box>
    );
}
