
import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div style={{padding: 20}}>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/add-listing">Add New Listing</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
      <h3>Your Listings</h3>
      <p>(Here you’ll see your crops, livestock, land listings)</p>
      {/* Later: List items from Firestore here */}
    </div>
  );
}
