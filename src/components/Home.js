import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div style={{padding: 20}}>
      <h1>AgriConnect</h1>
      <p>Marketplace for Crops, Livestock, and Land (Organic/Hybrid)</p>
      <Link to="/auth">Login / Register</Link>
      <br />
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
