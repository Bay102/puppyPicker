// import { useEffect, useState } from 'react';
import { DogCard } from './DogCard';

export const Dogs = ({ dogs, setDogs, refreshDogs, favoriteDog, unFavoriteDog }) => {

  return (
    <>
      {dogs.map((dog) => (
        <DogCard
          dogs={dogs}
          setDogs={setDogs}
          refreshDogs={refreshDogs}
          favoriteDog={favoriteDog}
          unFavoriteDog={unFavoriteDog}
          dog={dog}
          key={dog.id}
        />
      ))}
    </>
  );
};
