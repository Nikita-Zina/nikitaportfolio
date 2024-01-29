import React, { useState, useEffect } from 'react'; //Here I am setting the effect hook that is used without writing the class
import './App.css'; //Here I am importing the CSS file for coding styles

function App() {
  // This bit of code will help me to store all the pictures
  const [photos, setPhotos] = useState([]);

  // useEffect hook is used to fetch data from the JSON placeholder API when the component mounts
  useEffect(() => {
    // This bit fetches data from JSON placeholder API
    // As well as I am limiting the output for 20 elements
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error)); //Error message
  }, []); // This bit of code will run the effect only once on component mount

  // Ths bit will help to show the component 
  return (
    <div className="App">
      {/* Creating the container for all the photos from the API */}
      <div className="photo-container">
        {/* This bit creates the photo items and displays the image and the title in an overlay */}
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            {/* Displays the image with the photo title */}
            <img src={photo.url} alt={photo.title} />
            {/* Displays the title in an overlay */}
            <div className="title">{photo.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
