import { useEffect, useState } from "react";

import ListItem from "./ListItem";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Profile from "./Profile";
import Posts from "./Posts";
import Gallery from "./Gallery";
import Todos from "./Todos";
import SideBar from "./SideBar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListItem />} />
        <Route path="/:iid" element={<SideBar />}>
          <Route path="" element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="posts" element={<Posts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
