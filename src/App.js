
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ImageCard from './components/image-card/ImageCard';
import ImageSearch from './components/search/ImageSearch';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Loading from './components/load/Loading';

function App() {


  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [savedImages, updateSavedImages] = useState([]);
  const limit = 10;

  useEffect(() => {
    
    fetch(`https://pixabay.com/api/?key=13136421-266c28a6d61717bc2e4e6a83e&q=${query}&image_type=photo&per_page=${limit}`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [query]);



  return (
    <div className="container">

      <React.Fragment>
      <div className="main">
          <div className="row">
            <div className="col-sm-12 col-md-9">
              <div className="container">
                <div className="search">
                <ImageSearch searchText={(text) => setQuery(text)} />

                {/* Check if there are no results */}
                {!isLoading && images.length === 0 && <h1 className="no-images">No Images Found</h1> }

                {/* Show animation and load results */}
                {isLoading ?  <Loading /> : 
                
                <div className="search-results">
                
                {images.map(image => (
                  <ImageCard key={image.id} image={image} updateSavedImages={updateSavedImages}
                  savedImages={savedImages}/>
                ))}
                </div> 
                }
                </div>
            </div>
            </div>
        <div className="col-sm-12 col-md-3">
          <div className="items-list">
            <h2>Saved</h2>
                <ul className="images-list">
                    {savedImages.map((item, i) => (
                          <li key={i}>{item}
                          <OpenInNewIcon style={{ marginLeft: 8, fontSize:18  }} />
                          </li> 
                    ))}
                  </ul>
              </div>
          </div>
        </div>
        </div>
      </React.Fragment>
       
</div>
  );
}

export default App;
