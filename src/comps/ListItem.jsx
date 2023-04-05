import {
  Avatar,
  Stack,
  Typography,
  Card,
  Container,
  Box,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";

const ListItem = () => {
  const [accnts, setAccnts] = useState([]);
  useEffect(() => {
    getApiData();
  }, []);
  //local
  sessionStorage.setItem("myKey", JSON.stringify(accnts));

  const getApiData = async () => {
    const res = await axios.get("https://panorbit.in/api/users.json");

    setAccnts(res.data.users);
  };

  return (
    <Container
      alignitems="center"
      maxWidth={false}
      sx={{
        display: "center",
        justifyContent: "center",
        paddingTop: "100px",
        background: "skyblue",
        height: "100vh",
        borderRadius: "0px 0px 10px 10px",
      }}
    >
      <Card
        sx={{
          borderRadius: "10px 10px 0px 0px",
          height: "400px",
          width: "450px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "450px",
            height: "20%",
            backgroundColor: "#18161629",
            borderRadius: "10px 10px 0px 0px",
            boxShadow: "none",
          }}
        >
          <h2>Select an Account</h2>
        </Paper>
        <Stack
          sx={{ height: "80%", overflow: "auto", marginTop: "5px" }}
          spacing={2}
        >
          {accnts.map((item) => {
            return (
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                key={item.id}
                to={`/${item.id}/profile`}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                    paddingLeft: "20px",
                    marginLeft: "10%",
                    marginRight: "10%",
                  }}
                >
                  <Avatar src={item.profilepicture} />
                  <Typography
                    variant="h6"
                    sx={{ ml: "10px", fontWeight: "220" }}
                  >
                    {item.name}
                  </Typography>
                </Stack>
              </NavLink>
            );
          })}
        </Stack>
      </Card>
    </Container>
  );
};

export default ListItem;
