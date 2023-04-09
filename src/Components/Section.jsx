export const Section = ({ dogs, filter, setFilter, label, children }) => {
  const favoriteDogCount = dogs.filter((dog) => dog.isFavorite).length;

  const notFavoriteDogCount = dogs.filter((dog) => !dog.isFavorite).length;

  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          <div
            onClick={() =>
              filter === 'favorites' ? setFilter('') : setFilter('favorites')
            }
            className={`selector ${filter === 'favorites' ? 'active' : ''}`}
          >
            favorites( {favoriteDogCount} )
          </div>
          <div
            onClick={() =>
              filter === 'notFavorites' ? setFilter('') : setFilter('notFavorites')
            }
            className={`selector ${filter === 'notFavorites' ? 'active' : ''}`}
          >
            un-favorite ({notFavoriteDogCount})
          </div>
          <div
            onClick={() => setFilter('createDog')}
            className={`selector ${filter === 'createDog' ? 'active' : ''}`}
          >
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
