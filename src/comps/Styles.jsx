import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export const BoxSideBar = styled(Box)({
  backgroundColor: "#ef060630",
  borderRadius: "40px",
  marginLeft: "10px",
  alignItems: "center",
  display: "flex",
  height: "100vh",
  width: "20%",
  justifyContent: "center",
});

export const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

export const CustomNav = styled(NavLink)({
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
  color: "black",
});

export const ProfileContainer = styled(Box)({
  display: "flex",
  width: "80%",
  flexDirection: "column",
  marginLeft: "10px",
});

export const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  height: "10vh",
  width: "95%",
  alignItems: "center",
});

export const InfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "fit-content",
});

export const PartA = styled(Box)({
  width: "40%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingRight: "40px",
});

export const PartB = styled(Box)({
  width: "55%",

  paddingLeft: "20px",
});

export const DetailsStack = styled(Stack)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

export const GeoInfo = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "90%",
});

export const ChatBox = styled(Box)({
  background: "#ef060630",
  width: "250px",
  marginLeft: "800px",
  padding: "5px",
  marginTop: "18px",
  borderRadius: "2px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const BottomStack = styled(Stack)({
  paddingTop: "10px",
  height: "300px",
  width: "280px",
  overflowY: "scroll",
});

export const PopBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: "20px",
  paddingBottom: "20px",
});

export const TopStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  p: "2",
  width: "150px",
  height: "100px",
  paddingLeft: "8px",
  justifyContent: "space-evenly",
});

export const BoxDetails = styled(Box)({
  display: "flex",
  width: "100%",
  "& .child1": {
    width: "40%",
    display: "flex",
    justifyContent: "flex-end",
  },
  "& .child2": {
    width: "5%",
    display: "flex",
    justifyContent: "center",
  },
  "& .child3": {
    width: "55%",
    display: "flex",
    justifyContent: "flex-start",
  },
  "& .childA": {
    width: "10%",
    display: "flex",
    justifyContent: "flex-end",
  },
  "& .childB": {
    width: "5%",
    display: "flex",
    justifyContent: "center",
  },
  "& .childC": {
    width: "30%",
    display: "flex",
    justifyContent: "flex-start",
  },
});
