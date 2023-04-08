
export const Section = ({dogs, toggleFilter , setToggleFilter, label, children }) => { 


  let favoriteDogCount = dogs.filter(dog => dog.isFavorite).length;

  let notFavoriteDogCount = dogs.filter(dog => !dog.isFavorite).length;


  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorite count */}
          <div onClick={() => setToggleFilter('favorites')} className={`selector ${toggleFilter === 'favorites' ? 'active' : ''}`}>
            favorites( {favoriteDogCount} )
          </div>

          {/* This should display the un-favorite count */}
          <div onClick={() => setToggleFilter('notFavorites')} className={`selector ${toggleFilter === 'notFavorites' ? 'active' : ''}`}>
            un-favorite ({notFavoriteDogCount})
          </div>
          <div className={`selector`}>create dog</div>
        </div>
      </div>
      {children}
    </section>
  );
};
