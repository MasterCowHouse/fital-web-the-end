import { Link } from "@/navigation";
import { alpha, Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  bgImage: string | undefined;
  text: string;
  link: string;
};
const BlogMore: FC<Props> = ({ bgImage, link, text }) => {
  return (
    <Box
      sx={{
        padding: { xs: "25px", sm: "100px", md: "100px", lg: "100px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
          height: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
          backgroundColor: alpha("#210044", 0.5),
          zIndex: 100,
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src={bgImage}
          sx={{
            zIndex: 1,
            position: "absolute",
            objectFit: "cover",
            width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
            height: {
              xs: "350px",
              sm: "300px",
              md: "300px",
              lg: "300px",
            },
          }}
        />
        <Box
          sx={{
            marginTop: {
              xs: "200px",
              sm: "150px",
              md: "150px",
              lg: "150px",
            },
            padding: "0px 0px 0px 20px",
          }}
        >
          <Box>
            <Typography color="black">{text}</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <Link href={link}>
          <Typography
            sx={{
              border: "2px solid #FFC72C",
              borderRadius: "50px",
              width: "150px",
              textAlign: "center",
              padding: "10px 0px",
            }}
          >
            Leer más
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default BlogMore;
