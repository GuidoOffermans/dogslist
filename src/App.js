import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import DogslistContainer from './containers/DoglistContainer'
import DogBreedImagesContainer from './containers/DogBreedImagesContainer'

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={DogslistContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </main>
    </div>
  );
}

export default App;
