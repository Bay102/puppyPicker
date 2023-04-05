import { useEffect, useState } from 'react';
import './App.css';
import { CreateDogForm } from './Components/CreateDogForm';
import { Dogs } from './Components/Dogs';
import { Section } from './Components/Section';
import './fonts/RubikBubbles-Regular.ttf';

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dogs', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.log(error));
  }, []);

  //insert refresh dog function
  const refreshDogs = () => {
    fetch('http://localhost:3000/dogs', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((updatedDogs) => setDogs(updatedDogs))
      .catch((error) => console.log(error));
  };

  //insert Favorite dog function
  // Patch request to update isFavorite

  //insert Un-Favorite dog function
  // Patch request to update isFavorite

  //insert create dog function
  // post request to create a dog

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section label={'Dogs: '}>
        <Dogs
          dogs={dogs}
          setDogs={setDogs}
          refreshDogs={refreshDogs}
          label={'All Dogs'}
        />
        {/* <CreateDogForm /> */}
      </Section>
    </div>
  );
}

export default App;
