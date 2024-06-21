
import  { useState, useEffect } from 'react';
import "./PhotoAlbum.css"

const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([]);
  const [albumId, setAlbumId] = useState(1); 
  const albumIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

  useEffect(() => {
    
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error));
  }, [albumId]);

  const handleAlbumChange = (newAlbumId) => {
    setAlbumId(newAlbumId);
  };

  return (
    <div className="photo-album">
      <h1>Photo Album</h1>
      <div className="album-selector">
  <div className='user'>UserId</div>
  <div className="album-buttons">
    {albumIds.map(id => (
      <button key={id} onClick={() => handleAlbumChange(id)}>{id}</button>
    ))}
  </div>
</div>
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-thumbnail">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h6>{photo.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
