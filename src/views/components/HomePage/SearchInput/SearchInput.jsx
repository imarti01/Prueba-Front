import './SearchInput.scss';

export const SearchInput = ({ setResultsSearch, allCars }) => {
  const handleSearch = (e) => {
    const filterResults = allCars.filter((car) => {
      return `${car.brand} ${car.name}`
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setResultsSearch(filterResults);
  };

  return (
    <div className="search-input">
      <h4 className="search-input__title">Encuentra tu coche favorito</h4>
      <input
        className="search-input__input"
        type="search"
        onChange={handleSearch}
        placeholder="Búsqueda por marca o modelo"
      />
    </div>
  );
};
