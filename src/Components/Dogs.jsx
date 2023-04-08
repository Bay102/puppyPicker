// import { useEffect, useState } from 'react';
import { DogCard } from './DogCard';

export const Dogs = ({ dogs, filteredDogs , setDogs, refreshDogs, favoriteDog, unFavoriteDog }) => {

  return (
    <>
      {filteredDogs.map((dog) => (
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
