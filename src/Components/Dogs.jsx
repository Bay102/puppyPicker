// import { useEffect, useState } from 'react';
import { DogCard } from './DogCard';



export const Dogs = ({dogs, setDogs, refreshDogs}) => {

  // const deleteDog = () => {
  //   fetch(`http://localhost:3000/dogs/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         refreshDogs
  //       } else {
  //         console.log('Failed to delete item');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting item', error);
  //     });
  // };
 
  return (
    <>
      {dogs.map((dog) => (
        <DogCard dogs={dogs} setDogs={setDogs} refreshDogs={refreshDogs} dog={dog} key={dog.id} />
      ))}
    </>
  );
};
