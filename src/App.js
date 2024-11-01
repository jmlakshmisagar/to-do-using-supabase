import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./User";
import Authentication from "./Authentication";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/user/:id" element={<User />} /> 
      </Routes>
    </div>
  );
};

export default App;
