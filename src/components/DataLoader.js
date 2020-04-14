import React, { useState, useEffect } from "react";

export default function DataLoader() {
  const [photos, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(photos => setData(photos));
  },  []);

  return (
    <div>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
          <h1>{photo.title}</h1>
          <img src = {photo.url}/>

        </li>
        ))}
      </ul>
    </div>
  );
}