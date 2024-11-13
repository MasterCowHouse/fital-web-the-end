import { Box } from "@mui/material";
import HomeDescription from "./HomePage/HomeDescription";
import HomeHeader from "./HomePage/HomeHeader";
import HomeCards from "./HomePage/HomeCards";
import HomeVideo from "./HomePage/HomeVideo";
import HomeComoTokenizar from "./HomePage/HomeComoTokenizar";
import HomeNumeros from "./HomePage/HomeNnumeros";
import HomeFitalOfrece from "./HomePage/HomeFitalOfrece";
import HomeSeccionBlog from "./HomePage/HomeSeccionBlog";

export default function Home() {
  return (
    <Box>
      <HomeHeader/>
      <HomeDescription />
      < HomeCards />
      <HomeVideo/>
      <HomeComoTokenizar />
      <HomeNumeros />
      <HomeFitalOfrece />
      <HomeSeccionBlog />
    </Box>
  );
}
