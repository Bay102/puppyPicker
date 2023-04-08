import { useEffect, useState } from 'react';
import './App.css';
import { CreateDogForm } from './Components/CreateDogForm';
import { Dogs } from './Components/Dogs';
import { Section } from './Components/Section';
import './fonts/RubikBubbles-Regular.ttf';

function App() {
  const [dogs, setDogs] = useState([]);
  const [toggleFilter, setToggleFilter] = useState('');

  const refreshDogs = () => {
    fetch('http://localhost:3000/dogs', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((dogs) => setDogs(dogs))
      .catch(console.error);
  };

  useEffect(() => {
    refreshDogs();
  }, []);

  const filteredDogs = dogs.filter((dog) => {
    if (toggleFilter === '') {
      return true;
    }
    if (toggleFilter === 'favorites') {
      return dog.isFavorite;
    }
    if (toggleFilter === 'notFavorites') {
      return !dog.isFavorite;
    }
    if (toggleFilter === 'createDog') {
      return false;
    }
  });

  const favoriteDog = (dogId) => {
    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isFavorite: true,
      }),
    })
      .then((response) => {
        if (response.ok) {
          refreshDogs();
        }
      })
      .catch(console.error);
  };

  const unFavoriteDog = (dogId) => {
    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isFavorite: false,
      }),
    })
      .then((response) => {
        if (response.ok) {
          refreshDogs();
        }
      })
      .catch(console.error);
  };

  const addDog = (name, image, description) => {
    fetch('http://localhost:3000/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        image: image,
        description: description,
        isFavorite: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(console.error);
  };

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        dogs={dogs}
        setDogs={setDogs}
        toggleFilter={toggleFilter}
        setToggleFilter={setToggleFilter}
        set
        refreshDogs={refreshDogs}
        label={'Dogs: '}
      >
        <Dogs
          dogs={dogs}
          setDogs={setDogs}
          filteredDogs={filteredDogs}
          refreshDogs={refreshDogs}
          favoriteDog={favoriteDog}
          unFavoriteDog={unFavoriteDog}
          label={'All Dogs'}
        />
        {toggleFilter === 'createDog' && <CreateDogForm addDog={addDog} />}
      </Section>
    </div>
  );
}

export default App;
