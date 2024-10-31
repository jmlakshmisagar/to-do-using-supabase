import React from "react";
import { Routes, Route ,Link} from "react-router-dom";
import User from "./User";
import Authentication from "./Authentication";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<Authentication />} />
        <Route path="/" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
