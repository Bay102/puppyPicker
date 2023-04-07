import { useEffect, useState } from 'react';
import { FavoriteButton } from './FavoriteButton';
import { TrashButton } from './TrashButton';
import { UnfavoriteButton } from './UnfavoriteButton';

export const DogCard = ({
  dog: { name, image, description, id, isFavorite },
  refreshDogs,
  favoriteDog,
  unFavoriteDog,
}) => {
  

  const deleteDog = () => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          refreshDogs();
        } else {
          console.log('Failed to delete item');
        }
      })
      .catch(console.error)
  };

  return (
    <div className="dog-card">
      {/* Choose which button to show depending on if dog is a favorite */}
      {isFavorite ? (
        <UnfavoriteButton onClick={() => unFavoriteDog(id)} />
      ) : (
        <FavoriteButton onClick={() => favoriteDog(id)} />
      )}

      {/* Use this button to delete a puppy :( */}
      <TrashButton disabled={false} onClick={deleteDog} />

      {/* Ignore this  */}
      {/* You can temporarily set a favorite overlay after a user favorites a dog */}
      {/* Try making className "favorite-overlay active"*/}
      <div className="favorite-overlay ">{'<3'}</div>

      {/* Ignore this  */}
      {/* You can temporarily set a unfavorite overlay after a user favorites a dog */}
      {/* Try making className "unfavorite-overlay active"*/}
      <div className="unfavorite-overlay">{'</3'}</div>

      <p className="dog-name">{name}</p>

      <img src={image} alt={name} />

      <p className="dog-description">{description}</p>
    </div>
  );
};
