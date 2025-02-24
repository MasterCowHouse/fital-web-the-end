import { Link } from "@/navigation";
import { Box, Typography } from "@mui/material";

const HeaderBtn = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "200px 0px 100px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              marginRight: {
                xs: "200px",
                sm: "200px",
                md: "200px",
                lg: "200px",
              },
            }}
          >
            <Link href={"/"}>
              <Typography
                sx={{
                  border: "2px solid #FFC72C",
                  borderRadius: "50px",
                  backgroundColor: "#FFC72C",
                  padding: "25px 50px",
                  color: "#524092",
                }}
              >
                Blog
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              position: "absolute",
              marginRight: {
                xs: "-100px",
                sm: "-100px",
                md: "-100px",
                lg: "-100px",
              },
            }}
          >
            <Link href={"/"}>
              <Typography
                sx={{
                  border: "2px solid #FFC72C",
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px",
                  padding: "25px 50px",
                  color: "#FFC72C",
                }}
              >
                Nuestra presencia
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderBtn;
