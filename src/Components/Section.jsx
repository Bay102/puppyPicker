export const Section = ({ label, children }) => {
  const favoriteDogCount = 1;
  const unfavoriteDogCount = 2;
  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorite count */}
          <div className={`selector active`}>
            favorites( {favoriteDogCount} )
          </div>

          {/* This should display the un-favorite count */}
          <div className={`selector`}>un-favorite ( {unfavoriteDogCount} )</div>
          <div className={`selector`}>create dog</div>
        </div>
      </div>
      {children}
    </section>
  );
};
