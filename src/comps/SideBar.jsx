import React from "react";
import { Outlet } from "react-router-dom";
import { BoxSideBar, MainContainer, CustomNav } from "./Styles";
import { Typography, Box, Divider } from "@mui/material";

const SideBar = () => {
  return (
    <MainContainer>
      <BoxSideBar>
        <Box>
          <CustomNav to="profile">
            <Typography variant="h5">Profile</Typography>
          </CustomNav>
          <Divider sx={{ paddingTop: "10px " }} />

          <CustomNav to="posts">
            <Typography sx={{ paddingTop: "10px" }} variant="h5">
              Posts
            </Typography>
          </CustomNav>
          <Divider sx={{ paddingTop: "10px " }} />
          <CustomNav to="gallery">
            <Typography sx={{ paddingTop: "10px" }} variant="h5">
              Gallery
            </Typography>
          </CustomNav>
          <Divider sx={{ paddingTop: "10px " }} />
          <CustomNav to="todos">
            <Typography sx={{ paddingTop: "10px" }} variant="h5">
              Todos
            </Typography>
          </CustomNav>
        </Box>
      </BoxSideBar>
      <Outlet />
    </MainContainer>
  );
};

export default SideBar;
