import React, { useState, useEffect } from "react";
import { supabasedatabase } from "./APIKey"; 
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabasedatabase.from("authentication_user").select("*");
      if (error) console.error("Error fetching users:", error.message);
      else setUsers(data);
    };
    fetchData();
  }, []);
  
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.name === name && user.email === email && user.password === password
    );

    if (foundUser) {
      window.alert("User found");
      navigate(`/user/${foundUser.id}`);
    } else {
      window.alert("User not found");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-white" style={{ height: '100vh' }}>
      <div className="px-5 pt-4 pb-5 text-dark shadow-lg border" style={{ borderRadius: '15px' }}>
        <div className="text-center">
          <img src={logo} width={60} alt="Logo" />
        </div>
        <h3 className="mb-1 mt-3">to-do using supabase</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <input type="text" className="form-control mb-3" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="btn btn-outline-secondary w-100">Login / Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Authentication;
