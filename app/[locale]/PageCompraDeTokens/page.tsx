import { Box } from "@mui/material";
import Header from "./Header";
import InvertirTokens from "./InvertirTokens";
import EnFital from "./EnFital";
import SliderTokens from "./SliderTokens";
import PorqueFital from "./PorqueFital";
import Dudas from "./Dudas";


export default function PageCompraDeTokens () {
    return (
        <Box sx={{
            color: 'white'
        }}>
            <Header />
            <InvertirTokens />
            <EnFital />
            <SliderTokens />
            <PorqueFital />
            <Dudas />
        </Box>
    )
}