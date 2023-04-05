import { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  ProfileContainer,
  HeaderContainer,
  InfoContainer,
  PartA,
  PartB,
  DetailsStack,
  GeoInfo,
  BoxDetails,
  CustomNav,
  PopBox,
  BottomStack,
  TopStack,
  ChatBox,
} from "./Styles";
import {
  Typography,
  Divider,
  Box,
  Avatar,
  Stack,
  Popover,
} from "@mui/material";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { iid } = useParams();
  const idInInteger = parseInt(iid) - 1;
  const data = JSON.parse(sessionStorage.getItem("myKey") || "");
  const info = data[idInInteger];

  const [anchorElChat, setAnchorElChat] = useState(null);

  const handleClickChat = (event) => {
    setAnchorElChat(event.currentTarget);
  };

  const handleCloseChat = () => {
    setAnchorElChat(null);
  };
  const opn = Boolean(anchorElChat);

  const {
    id,
    username,
    profilepicture,
    name,
    email,
    phone,
    website,
    company,
    address,
  } = info;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <ProfileContainer>
      <HeaderContainer>
        {" "}
        <Typography variant="h6">Profile</Typography>
        <Box
          variant="contained"
          onClick={handleClick}
          sx={{ display: "flex", paddingTop: "10px" }}
        >
          <Avatar src={profilepicture} />
          <Typography variant="h6">{name}</Typography>
        </Box>
      </HeaderContainer>

      <Divider />

      <InfoContainer>
        <PartA>
          <Avatar
            sx={{ height: 180, width: 180, borderRadius: "50%" }}
            src={profilepicture}
          />

          <Typography variant="h4">{name}</Typography>

          <DetailsStack spacing={2}>
            <BoxDetails>
              <Box className="child1">
                <Typography variant="standard">Username</Typography>
              </Box>
              <Box className="child2">:</Box>
              <Box className="child3">
                <Typography variant="standard">{username}</Typography>
              </Box>
            </BoxDetails>

            <BoxDetails>
              <Box className="child1">
                <Typography variant="standard">E-mail</Typography>
              </Box>
              <Box className="child2">:</Box>
              <Box className="child3">
                <Typography variant="standard">{email}</Typography>
              </Box>
            </BoxDetails>

            <BoxDetails>
              <Box className="child1">
                <Typography variant="standard">Phone</Typography>
              </Box>
              <Box className="child2">:</Box>
              <Box className="child3">
                <Typography variant="standard">{phone}</Typography>
              </Box>
            </BoxDetails>

            <BoxDetails>
              <Box className="child1">
                <Typography variant="standard">Website</Typography>
              </Box>
              <Box className="child2">:</Box>
              <Box className="child3">
                <Typography variant="standard">{website}</Typography>
              </Box>
            </BoxDetails>
          </DetailsStack>

          <Divider />

          <Typography variant="h4">Company</Typography>

          <DetailsStack spacing={2}>
            <BoxDetails>
              <Box className="child1">
                <Typography variant="standard">Name</Typography>
              </Box>
              <Box className="child2">:</Box>
              <Box className="child3">
                <Typography variant="standard">{company.name}</Typography>
              </Box>
            </BoxDetails>

            <BoxDetails>
              <Box className="child1">
                <Typography variant="standard">cathaphrase</Typography>
              </Box>
              <Box className="child2">:</Box>
              <Box className="child3">
                <Typography variant="standard">
                  {company.catchPhrase}
                </Typography>
              </Box>
            </BoxDetails>

            <BoxDetails>
              <Box className="child1">
                <Typography variant="standard">bs</Typography>
              </Box>
              <Box className="child2">:</Box>
              <Box className="child3">
                <Typography variant="standard">{company.bs}</Typography>
              </Box>
            </BoxDetails>
          </DetailsStack>
        </PartA>
        <Divider orientation="vertical" variant="middle" flexItem />

        <PartB>
          <Box sx={{ paddingBottom: "15px" }}>
            <Typography variant="standard">Address:</Typography>
          </Box>

          <DetailsStack spacing={2}>
            <BoxDetails>
              <Box className="childA">
                <Typography variant="standard">Street</Typography>
              </Box>
              <Box className="childB">:</Box>
              <Box className="childC">
                <Typography variant="standard">{address.street}</Typography>
              </Box>
            </BoxDetails>

            <BoxDetails>
              <Box className="childA">
                <Typography variant="standard">City</Typography>
              </Box>
              <Box className="childB">:</Box>
              <Box className="childC">
                <Typography variant="standard">{address.city}</Typography>
              </Box>
            </BoxDetails>

            <BoxDetails>
              <Box className="childA">
                <Typography variant="standard">Suite</Typography>
              </Box>
              <Box className="childB">:</Box>
              <Box className="childC">
                <Typography variant="standard">{address.suite}</Typography>
              </Box>
            </BoxDetails>
            <BoxDetails>
              <Box className="childA">
                <Typography variant="standard">ZipCode</Typography>
              </Box>
              <Box className="childB">:</Box>
              <Box className="childC">
                <Typography variant="standard">{address.zipcode}</Typography>
              </Box>
            </BoxDetails>
          </DetailsStack>

          <Box sx={{ width: "100%", overflow: "hidden", marginTop: "10px" }}>
            <Avatar
              sx={{
                height: "300px",
                width: "90%",
                borderRadius: "10px",
              }}
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_2560%2Cc_limit/GoogleMapTA.jpg"
            />
            <GeoInfo>
              <Typography>Latitude:{address.geo.lat}</Typography>
              <Typography>Longitude:{address.geo.lng}</Typography>
            </GeoInfo>
          </Box>
        </PartB>
      </InfoContainer>

      <ChatBox aria-describedby={id} onClick={handleClickChat}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ChatBubbleOutlineIcon />
          <Typography>Chats</Typography>
        </Box>

        <KeyboardArrowUpIcon />
      </ChatBox>
      <Popover
        id={id}
        open={opn}
        anchorElChat={anchorElChat}
        onClose={handleCloseChat}
        anchorReference="anchorEl"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <BottomStack>
          {data.map((item) => {
            return (
              <PopBox key={item.id}>
                <Avatar src={item.profilepicture} />
                <Typography>{item.name}</Typography>
                <Box
                  sx={{
                    backgroundColor: "green",
                    height: "6px",
                    width: "6px",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Divider />
              </PopBox>
            );
          })}
        </BottomStack>
      </Popover>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TopStack>
          <CustomNav to={"/7/profile"}>
            <Typography>Kurtis Weissnat</Typography>
            <Divider />
          </CustomNav>
          <CustomNav to={"/9/profile"}>
            <Typography>Glenna Reichert</Typography>
            <Divider />
          </CustomNav>
          <CustomNav to={"/"}>
            <Typography>Sign Out</Typography>
          </CustomNav>
        </TopStack>
      </Popover>
    </ProfileContainer>
  );
};

export default Profile;
