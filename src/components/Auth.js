import React, { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{padding: 20}}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/><br/>
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/><br/>
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button onClick={()=>setIsRegister(r=>!r)}>
        {isRegister ? "Have an account? Login" : "No account? Register"}
      </button>
      <div style={{color:"red"}}>{error}</div>
    </div>
  );
}
