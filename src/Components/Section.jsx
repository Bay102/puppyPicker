export const Section = ({
  dogs,
  toggleFilter,
  setToggleFilter,
  label,
  children,
}) => {
  const favoriteDogCount = dogs.filter((dog) => dog.isFavorite).length;

  const notFavoriteDogCount = dogs.filter((dog) => !dog.isFavorite).length;

  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          <div
            onClick={() => setToggleFilter('favorites')}
            className={`selector ${toggleFilter === 'favorites' ? 'active' : ''}`}
          >
            favorites( {favoriteDogCount} )
          </div>
          <div
            onClick={() => setToggleFilter('notFavorites')}
            className={`selector ${toggleFilter === 'notFavorites' ? 'active' : ''}`}
          >
            un-favorite ({notFavoriteDogCount})
          </div>
          <div onClick={() => setToggleFilter('createDog')} className={`selector`}>
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
