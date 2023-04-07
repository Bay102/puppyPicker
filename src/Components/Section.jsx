import { useState } from "react";

export const Section = ({dogs, setDogs, label, children }) => { 

  let favoriteDogCount = dogs.filter(dog => dog.isFavorite).length;

  let notFavoriteDogCount = dogs.filter(dog => !dog.isFavorite).length;

  // const [faves, setFaves] = useState(favoriteDogCount);
  // const [notFaves, setNotFaves] = useState(notFavoriteDogCount);

  const showFavorites = () => {
      setDogs(dogs.filter(dog => dog.isFavorite))

    // fetch('http://localhost:3000/dogs', {
    //   method: 'GET',
    // })
    //   .then((response) => response.json())
    //   .then((updatedDogs) => setDogs(updatedDogs.filter((dog) => dog.isFavorite)))
    //   .catch(console.error);
  };

  const showNotFavorites = () => {
    setDogs(dogs.filter(dog => !dog.isFavorite))
    // fetch('http://localhost:3000/dogs', {
    //   method: 'GET',
    // })
    //   .then((response) => response.json())
    //   .then((dogData)=> setDogs(dogData.filter((dog) => !dog.isFavorite)))
    //   .catch(console.error);
  };



  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorite count */}
          <div onClick={showFavorites} className={`selector active`}>
            favorites( {favoriteDogCount} )
          </div>

          {/* This should display the un-favorite count */}
          <div onClick={showNotFavorites} className={`selector`}>
            un-favorite ({notFavoriteDogCount})
          </div>
          <div className={`selector`}>create dog</div>
        </div>
      </div>
      {children}
    </section>
  );
};
