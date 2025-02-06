import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const PorqueFital = () => {
  const t = useTranslations("BuyToken.why");

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: "50px",
            color: "#FFC72C",
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          {t("title")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="overflow-y-auto"
          sx={{
            width: { xs: "500px", sm: "550px", md: "850px", lg: "auto" },
          }}
        >
          <table className="table-fixed border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                  <Box
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/iconoUno.svg"
                      alt="FITAL"
                      sx={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "25px",
                      }}
                    />
                  </Box>
                  {t.raw("table.columns")[0]}
                </th>
                <th className="border border-slate-600 p-10 bg-[#FFFFFF] text-[#524092]">
                  <Box
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/iconoDos.svg"
                      alt="FITAL"
                      sx={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "25px",
                      }}
                    />
                  </Box>
                  {t.raw("table.columns")[1]}
                </th>
                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                  <Box
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/iconoTres.svg"
                      alt="FITAL"
                      sx={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "25px",
                      }}
                    />
                  </Box>
                  {t.raw("table.columns")[2]}
                </th>
                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                  <Box
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/iconoCuatro.svg"
                      alt="FITAL"
                      sx={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "25px",
                      }}
                    />
                  </Box>
                  {t.raw("table.columns")[3]}
                </th>
                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                  <Box
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/iconoCinco.svg"
                      alt="FITAL"
                      sx={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "25px",
                      }}
                    />
                  </Box>
                  {t.raw("table.columns")[4][0]}
                  <br />
                  {t.raw("table.columns")[4][1]}
                </th>
                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                  <Box
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/iconoSeis.svg"
                      alt="FITAL"
                      sx={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "25px",
                      }}
                    />
                  </Box>
                  {t.raw("table.columns")[5]}
                </th>
                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                  <Box
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/iconoSiete.svg"
                      alt="FITAL"
                      sx={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "25px",
                      }}
                    />
                  </Box>
                  {t.raw("table.columns")[6]}
                </th>
                <th className="border border-slate-600 p-10 bg-[#FFC72C] text-[#524092]">
                  <Box
                    sx={{
                      width: "100px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/iconoOcho.svg"
                      alt="FITAL"
                      sx={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "25px",
                      }}
                    />
                  </Box>
                  {t.raw("table.columns")[7][0]} <br />
                  {t.raw("table.columns")[7][1]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.returns.title")[0]} <br />
                  {t.raw("table.rows.returns.title")[1]}
                </td>
                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-5 text-center">
                  {t("table.rows.volatility.title")}
                </td>
                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">
                  {t.raw("table.rows.volatility.values")[0]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.volatility.values")[1]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.volatility.values")[2]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.volatility.values")[3]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.volatility.values")[4]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.volatility.values")[5]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.volatility.values")[6]}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.risk.title")[0]} <br />
                  {t.raw("table.rows.risk.title")[1]}
                </td>
                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">
                  {t.raw("table.rows.risk.values")[0]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.risk.values")[1]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.risk.values")[2]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.risk.values")[3]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.risk.values")[4]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.risk.values")[5]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.risk.values")[6]}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-5 text-center">
                  {t("table.rows.accessibility")}
                </td>
                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "tache",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.liquidity")[0]} <br />
                  {t.raw("table.rows.liquidity")[1]}
                </td>
                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.asset")[0]} <br />
                  {t.raw("table.rows.asset")[1]}
                </td>
                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.hedge")[0]} <br />
                  {t.raw("table.rows.hedge")[1]}
                </td>
                <td className="border border-slate-600 p-5 bg-[#FFFFFF]">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/paloma.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
                <td className="border border-slate-600 p-5">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="../img/tache.svg"
                      alt="FITAL"
                      style={{
                        backgroundColor: "#524092",
                        padding: "10px",
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.profitability.title")[0]} <br />
                  {t.raw("table.rows.profitability.title")[1]}
                </td>
                <td className="border border-slate-600 p-5 text-center bg-[#FFFFFF] text-[#524092]">
                  13 - 30%
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  7 - 14%
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  10 - 20%
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  {t.raw("table.rows.profitability.value")[0]} <br />
                  {t.raw("table.rows.profitability.value")[1]}
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  8 - 12%
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  10 - 12%
                </td>
                <td className="border border-slate-600 p-5 text-center">
                  2 - 6%
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
};

export default PorqueFital;
