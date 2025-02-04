import { Box, Typography, TextField } from "@mui/material";
import Image from "next/image";
import corazon from "@/public/img/corazon.svg";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "@/navigation";

interface CustomLinks {
  id: number;
  ruta: string;
  links: string;
}

const customLinks: CustomLinks[] = [
  {
    id: 1,
    ruta: "/",
    links: "Septimbre 2023",
  },
  {
    id: 1,
    ruta: "/",
    links: "Octubre 2023",
  },
  {
    id: 1,
    ruta: "/",
    links: "Noviembre 2023",
  },
];

const Articulo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "center", sm: "start", md: "start", lg: "start" },
        justifyContent: "center",
        flexDirection: {
          xs: "column-reverse",
          sm: "row",
          md: "row",
          lg: "row",
        },
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
          width: { xs: "90%", sm: "60%", md: "70%", lg: "70%" },
        }}
      >
        <Box>
          <Box
            component={"img"}
            src="../img/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles.png"
            alt="¿Qué es el blockchain?"
            sx={{
              width: { xs: "100%", sm: "90%", md: "90%", lg: "70%" },
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "40px",
              color: "#524092",
            }}
          >
            ¿Qué Diferencias hay
            <br />
            entre la Venta Tradicional de
            <br />
            Inmuebles y la Tokenización?
          </Typography>
          <Typography
            sx={{
              color: "#FFC72C",
            }}
          >
            16 de Octubre 2023
          </Typography>
          <Box
            sx={{
              display: "flex",
              borderTop: "1px solid grey",
              width: "200px",
            }}
          >
            <Typography
              sx={{
                color: "#524092",
              }}
            >
              5
            </Typography>
            <Image
              src={corazon}
              alt="Puntaje Articulo"
              width={15}
              height={15}
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              color: "black",
            }}
          >
            La forma en que compramos y vendemos inmuebles ha evolucionado con
            el tiempo,
            <br />
            y la tokenización es una de las innovaciones más recientes en el
            sector inmobiliario.
            <br />
            <br />
            Este nuevo modelo, impulsado por la tecnología blockchain, permite
            dividir
            <br />
            una propiedad en fracciones representadas por tokens digitales,
            haciendo que la inversión
            <br />
            en bienes raíces sea más accesible y líquida. Pero, ¿en qué se
            diferencia exactamente la tokenización de
            <br />
            la venta tradicional de inmuebles? En este artículo, te explicamos
            las principales diferencias
            <br />
            entre ambos enfoques para que conozcas cuál puede ser más
            conveniente para ti.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              1. Accesibilidad y Capital Inicial
            </span>
            <br />
            <br />
            &bull;Venta Tradicional: Para comprar un inmueble de manera
            tradicional,
            <br />
            generalmente se necesita un capital considerable, ya que el
            comprador adquiere la propiedad completa.
            <br />
            Además, suelen requerir pagos iniciales altos y calificaciones
            crediticias aprobadas,
            <br />
            lo que limita el acceso a un grupo reducido de personas con recursos
            financieros sólidos.
            <br />
            &bull;Tokenización: En cambio, la tokenización permite dividir una
            propiedad en tokens digitales,
            <br />
            que representan una pequeña fracción del inmueble. Esto significa
            que los inversionistas pueden adquirir
            <br />
            solo una parte del inmueble, invirtiendo un capital mucho menor. La
            tokenización democratiza la inversión
            <br />
            en bienes raíces, permitiendo que más personas participen en el
            mercado sin necesidad de
            <br />
            hacer grandes desembolsos.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              <Image
                src="/img/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles-2.png"
                alt=""
                width={700}
                height={700}
              />
            </span>
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              2. Liquidez y Facilidad de Venta
            </span>
            <br />
            <br />
            &bull;Venta Tradicional: La venta de una propiedad completa puede
            tomar tiempo debido a la necesidad de
            <br />
            encontrar un comprador adecuado y negociar términos legales y
            financieros. La liquidez en el mercado
            <br />
            inmobiliario tradicional es baja; puede llevar meses o incluso años
            vender una propiedad.
            <br />
            &bull;Tokenización: Con la tokenización, los tokens inmobiliarios se
            pueden comprar y vender en plataformas digitales,
            <br />
            lo que permite una mayor liquidez. Los inversionistas pueden vender
            sus tokens de manera rápida y sencilla,
            <br />
            casi como si estuvieran operando con acciones en la bolsa. Esta
            facilidad de transacción convierte
            <br />
            a la tokenización en una alternativa atractiva para quienes buscan
            liquidez en sus inversiones.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              <Image
                src="/img/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles-3.png"
                alt=""
                width={700}
                height={700}
              />
            </span>
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              3. Transparencia y Seguridad
            </span>
            <br />
            <br />
            &bull;Venta Tradicional: En la venta de inmuebles tradicionales, la
            documentación y
            <br />
            los registros de propiedad suelen estar en manos de diversas
            entidades como notarios y registros públicos.
            <br />
            Esto puede hacer que el proceso sea complejo y que la información no
            esté completamente centralizada o
            <br />
            sea difícil de verificar. Además, los trámites legales pueden ser
            largos y, en algunos casos, existe el riesgo de fraude.
            <br />
            &bull;Tokenización: En la tokenización, la tecnología blockchain
            proporciona un registro descentralizado e
            <br />
            inmutable de cada transacción. Esto significa que todos los
            movimientos quedan registrados de manera segura y
            <br />
            transparente, lo cual reduce significativamente el riesgo de fraude.
            <br />
            Además, al estar todo documentado en una blockchain, la verificación
            de propiedad y
            <br />
            las transacciones son mucho más eficientes y confiables.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              4. Gestión de la Propiedad y Distribución de Ganancias
            </span>
            <br />
            <br />
            &bull;Venta Tradicional: En un modelo de venta tradicional, el
            propietario es el único responsable de
            <br />
            la gestión del inmueble. Cualquier ingreso generado, como el
            alquiler, se distribuye exclusivamente al propietario.
            <br />
            Esta estructura centralizada puede ser limitante si el propietario
            necesita dividir ingresos o delegar responsabilidades.
            <br />
            &bull;Tokenización: Con la tokenización, múltiples inversionistas
            pueden poseer una fracción del inmueble y
            <br />
            recibir ganancias proporcionalmente, como los ingresos generados por
            el alquiler. Además, la gestión de
            <br />
            la propiedad puede ser realizada por una entidad que actúa como
            intermediario, facilitando la distribución automática de
            <br />
            ganancias a todos los titulares de tokens. Esto hace que la gestión
            y el retorno de inversión
            <br />
            sean más eficientes y transparentes.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              5. Flexibilidad y Diversificación
            </span>
            <br />
            <br />
            &bull;Venta Tradicional: Comprar un inmueble completo implica una
            gran inversión en un solo activo,
            <br />
            lo que limita las opciones de diversificación. Esto significa que el
            inversionista debe concentrarse
            <br />
            en una propiedad y asume el riesgo completo asociado a ese activo
            específico.
            <br />
            &bull;Tokenización: Con la tokenización, los inversionistas pueden
            distribuir su capital en varios inmuebles,
            <br />
            comprando fracciones de distintas propiedades. Esto les permite
            diversificar su portafolio y
            <br />
            mitigar riesgos al no depender de un solo activo. Es una opción
            ideal para quienes desean construir un portafolio
            <br />
            diversificado en bienes raíces sin comprometer todo su capital en
            una sola propiedad.
            <br />
            <br />
            <span style={{ color: "#524092", fontWeight: 900 }}>
              La tokenización inmobiliaria está cambiando la forma en que las
              personas pueden invertir en bienes raíces
            </span>
            ,
            <br />
            ofreciendo ventajas como accesibilidad, liquidez, transparencia y
            diversificación.
            <br />
            Mientras que la venta tradicional sigue siendo una opción sólida
            para quienes buscan propiedad completa y
            <br />
            control total, la tokenización abre nuevas oportunidades para
            aquellos que desean invertir de forma flexible y segura.
            <br />
            <br />
            ¿Te interesa aprender más sobre cómo la tokenización puede
            transformar tus inversiones?
            <br />
            <br />
            <Link
              href={"/PageContacto"}
              style={{
                textDecorationLine: "underline",
              }}
            >
              {/* <Typography sx={{
                                textDecorationLine: 'underline'
                            }}> */}
              Fital es lo que estabas buscando, contáctanos para tokenizar tus
              inmuebles.
              {/* (agregar link a página “compra de tokens de la web de fital”) */}
              {/* </Typography> */}
            </Link>
          </Typography>
        </Box>
        <Box>
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "40px",
                pt: 10,
              }}
            >
              También podría interesarte:
            </Typography>
          </Box>
          <hr />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                sm: "normal",
                md: "normal",
                lg: "normal",
              },
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url(../img/claves-invertir-bienes-raices-criptomonedas.png)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    {/* <Typography>
                                            FitalCoin: 
                                        </Typography> */}
                    <Typography>
                      Claves para Invertir en
                      <br />
                      Bienes Raíces con Criptomonedas
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/claves-invertir-bienes-raices-criptomonedas"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url(../img/que-es-la-tokenizacion-inmobiliaria-3.png)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    <Typography>
                      ¿Qué es la Tokenización
                      <br />
                      Inmobiliaria?
                    </Typography>
                    <Typography>Guía Completa para Principiantes</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/que-es-la-tokenizacion-inmobiliaria"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url(../img/Que-es-el-blockchain.png)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    <Typography>¿Qué es el blockchain?</Typography>
                    <Typography>
                      ¿Qué ventajas tiene adentrarse al mundo del blockchain?
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: { xs: "50px", sm: "100px", md: "100px", lg: "100px" },
          width: { xs: "90%", sm: "35%", md: "25%", lg: "25%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            placeholder="Buscar post"
            variant="outlined"
            required={true}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #524092",
                borderRadius: "50px",
              },
              //estilos para el hover del input
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#524092",
                },
              },
              //estilos para el input cuando esta en focus entra y sale el cursor del campo
              " .Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#524092",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "#524092",
              borderRadius: "100px",
              width: "55px",
              height: "55px",
              marginLeft: "-50px",
            }}
          >
            <IconButton
              type="button"
              sx={{
                p: "15px",
                color: "white",
              }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              color: "#524092",
              fontSize: "25px",
              borderBottom: "2px solid #FFC72C",
            }}
          >
            Más Post
          </Typography>
        </Box>
        {customLinks.map(({ ruta, links }, id) => (
          <Box key={id}>
            <Link
              href={ruta}
              style={{
                color: "#606060",
                textDecoration: "underline",
              }}
            >
              {links}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Articulo;
