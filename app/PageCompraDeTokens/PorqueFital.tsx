import { Box, Typography } from "@mui/material";

const PorqueFital = () => {
    return (
        <Box>
            <Box>
                <Typography sx={{
                    fontSize: '50px',
                    color: '#FFC72C',
                    fontWeight: 900,
                    textAlign: 'center'
                }}>
                    ¿Por qué FITAL?
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box className='overflow-y-auto' sx={{
                    width: {xs: '500px', sm: '550px', md: '850px', lg: 'auto',},
                    
                }}>
                    <table className="table-fixed border-separate border-spacing-2 border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoUno.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'

                                            }}
                                        />
                                    </Box>
                                    Comparativa
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFFFFF] text-[#524092]">
                                    <Box sx={{
                                        
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoDos.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'      
                                            }}
                                        />
                                    </Box>
                                    FITAL
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoTres.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Inmobiliario
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoCuatro.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Acciones
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoCinco.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Activos
                                <br />digitales</th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoSeis.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Oro
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoSiete.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Bonos
                                </th>
                                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                                    <Box sx={{
                                        
                                        width: '100px',
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/iconoOcho.svg'
                                            alt="FITAL"
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '25px'
                                            }}
                                        />
                                    </Box>
                                    Cuentas <br />remuneradas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">
                                    Rendimiento <br />atractivo
                                </td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Volatilidad</td>
                                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">Baja</td>
                                <td className="border border-slate-600 p-5 text-center">Baja</td>
                                <td className="border border-slate-600 p-5 text-center">Alta</td>
                                <td className="border border-slate-600 p-5 text-center">Extrema</td>
                                <td className="border border-slate-600 p-5 text-center">Baja</td>
                                <td className="border border-slate-600 p-5 text-center">Baja</td>
                                <td className="border border-slate-600 p-5 text-center">Baja</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Nivel de <br />riesgo</td>
                                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">Bajo</td>
                                <td className="border border-slate-600 p-5 text-center">Bajo</td>
                                <td className="border border-slate-600 p-5 text-center">Alto</td>
                                <td className="border border-slate-600 p-5 text-center">Extremo</td>
                                <td className="border border-slate-600 p-5 text-center">Bajo</td>
                                <td className="border border-slate-600 p-5 text-center">Bajo</td>
                                <td className="border border-slate-600 p-5 text-center">Bajo</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Accesibilidad</td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'tache',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>                            
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Liquidez <br />24/7</td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Activo <br />tangible</td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Cobertura de <br />la inflación</td>
                                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/paloma.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                                <td className="border border-slate-600 p-5">
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box
                                            component={'img'} 
                                            src='../img/tache.svg'
                                            alt="FITAL"
                                            style={{
                                                backgroundColor: '#524092',
                                                padding: '10px',
                                                borderRadius: '100%'
                                            }}
                                        />
                                    </Box>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 p-5 text-center">Rentabilidad <br />anual</td>
                                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">13 - 30%</td>
                                <td className="border border-slate-600 p-5 text-center">7 - 14%</td>
                                <td className="border border-slate-600 p-5 text-center">10 - 20%</td>
                                <td className="border border-slate-600 p-5 text-center">Altamente <br />variable</td>
                                <td className="border border-slate-600 p-5 text-center">8 - 12%</td>
                                <td className="border border-slate-600 p-5 text-center">10 - 12%</td>
                                <td className="border border-slate-600 p-5 text-center">2 - 6%</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>        



        </Box>
    )
}

export default PorqueFital