import { Typography, Box, Link, Card } from "@mui/material";
import { Outlet } from "react-router-dom";

const Nothing = () => {
  return (
    <div>
      <Card sx={{ display: "row", height: "100vh", width: "100%" }}>
        <Link to="info">
          <Typography variant="h6">Profile</Typography>
        </Link>

        <Link to="posts">
          <Typography variant="h6">Posts</Typography>
        </Link>
        <Link to="gallery">
          <Typography variant="h6">Gallery</Typography>
        </Link>
        <Link to="todos">
          <Typography variant="h6">Todos</Typography>
        </Link>
        <Outlet />
      </Card>
      <Box sx={{ width: "400px", height: "100vh", justifyContent: "center" }}>
        <Typography variant="h6" justifyContent="center">
          Coming Soon
        </Typography>
      </Box>
      ;
    </div>
  );
};

export default Nothing;
