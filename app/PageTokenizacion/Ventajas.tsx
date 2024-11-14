import { Box, Typography } from "@mui/material"

interface CustomIconosVentajas {
    id: number;
    srcIcono: string;
    titulo: string;
    texto: JSX.Element;
}

const customIconosVentajas: CustomIconosVentajas[] = [
    {
        id: 1,
        srcIcono: '../img/IconoVentajas1.svg',
        titulo: 'Liquidez:',
        texto: 
        <span>
            La tokenización permite dividir los 
            <br />
            activos inmobiliarios en tokens que 
            <br />
            pueden comprarse y venderse 
            <br />
            fácilmente en mercados secundarios, 
            <br />
            lo que mejora la liquidez y facilita 
            <br />
            convertir las ganancias en efectivo.
        </span>,
    },
    {
        id: 2,
        srcIcono: '../img/IconoVentajas2.svg',
        titulo: 'Seguridad Blockchain:',
        texto: 
        <span>
            La tecnología blockchain protege los 
            <br />
            datos de propiedad y las 
            <br />
            transacciones mediante encriptación,
            <br /> 
            evitando manipulaciones y 
            <br />
            garantizando la integridad y 
            <br />
            seguridad de las inversiones.
        </span>,
    },
    {
        id: 3,
        srcIcono: '../img/IconoVentajas3.svg',
        titulo: 'Transparencia:',
        texto: 
        <span>
            Todas las transacciones y registros de 
            <br />
            propiedad se guardan en una 
            <br />
            blockchain, creando un historial claro 
            <br />
            e inmutable que reduce el riesgo de 
            <br />
            fraudes y errores.
        </span>,
    },
]

const Ventajas = () => {
    return (
        <Box sx={{
            bgcolor: '#210044',
            marginTop: '100px'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px',
                textAlign: {xs: 'center', sm: 'center', md: 'center', lg: 'center',},
            }}>
                <Typography sx={{
                    fontSize: '50px'
                }}>
                    Ventajas de la tokenización
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingBottom: '100px'
            }}>
                {customIconosVentajas.map(({srcIcono, titulo, texto}, id) => (
                    <Box key={id}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: '50px'
                        }}>
                            <Box
                                component={'img'}
                                src={srcIcono}
                                alt="Ventajas de la tokenización"
                            />
                        </Box>
                        <Box>
                            <Typography sx={{
                                color: '#FFC72C'
                            }}>
                                {titulo}
                            </Typography>
                        </Box>
                        <Box sx={{
                            height: '150px'
                        }}>
                            <Typography>
                                {texto}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Ventajas