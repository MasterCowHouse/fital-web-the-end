import { Box, Typography } from "@mui/material"

const EnFital = () => {
    return (
        <Box>
            <Box sx={{
                display: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                padding: {xs: '50px 25px 0px 25px', sm: '50px 25px 0px 25px', md: '0px 100px', lg: '0px 100px',},
            }}>
                <Typography sx={{
                    border: '2px solid #FFC72C',
                    borderRadius: {xs: '50px', sm: '100px', md: '100px', lg: '100px',},
                    padding: '20px 60px',
                    fontSize: {xs: '20px', sm: '25px', md: '25px', lg: '25px',},
                }}>
                    En FITAL, nuestra comisión es <span style={{fontWeight: 900}}>clara y justa</span> no se cobra hasta que la 
                    <br />
                    operación <span style={{fontWeight: 900}}>se completa con éxito</span>, garantizando que nuestros intereses estén 
                    <br />
                    <span style={{fontWeight: 900}}>siempre alineados</span> con los de nuestros compradores.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography sx={{
                    // border: '2px solid red',
                    fontSize: {xs: '25px', sm: '35px', md: '35px', lg: '35px',},
                    padding: '50px 50px',
                    textAlign: {xs: 'left', sm: 'center', md: 'center', lg: 'center',},
                }}>
                    <span style={{fontWeight: 900}}>Conoce</span> nuestros proyectos <span style={{fontWeight: 900}}>y elige </span>
                    <br />
                    el que más <span style={{color: '#FFC72C'}}>se acomode a ti.</span>
                </Typography>
            </Box>
        </Box>
    )
}

export default EnFital