import React, { useState } from "react";

export default function AddListing() {
  const [type, setType] = useState("crop");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("organic");
  const [region, setRegion] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Listing submitted (functionality to add to Firestore coming soon)");
    // You’ll later add code to upload to Firebase
  };

  return (
    <div style={{padding: 20}}>
      <h2>Add New Listing</h2>
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <select value={type} onChange={e=>setType(e.target.value)}>
          <option value="crop">Crop</option>
          <option value="livestock">Livestock</option>
          <option value="land">Land</option>
        </select>
        <br/>
        <label>Category:</label>
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="organic">Organic</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <br/>
        <label>Title:</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} required/>
        <br/>
        <label>Region:</label>
        <input value={region} onChange={e=>setRegion(e.target.value)} required/>
        <br/>
        <label>Image:</label>
        <input type="file" onChange={e=>setImage(e.target.files[0])}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
