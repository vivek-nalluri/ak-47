import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import Header from "./Pages/header";
import User from "./Pages/user";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
