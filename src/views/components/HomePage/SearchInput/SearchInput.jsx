import './SearchInput.scss';

export const SearchInput = () => {
  return (
    <div className="search-input">
      <h2 className="search-input__title">Encuentra tu coche favorito</h2>
      <input className="search-input__input" type="search" />
    </div>
  );
};
