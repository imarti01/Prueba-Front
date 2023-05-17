import './CardCar.scss';

export const CardCar = ({ car }) => {
  return (
    <div key={car._id} className="card-car">
      <input type="checkbox" name="favCar" className="card-car__input" />
      <p className="card-car__text">
        {car.brand} {car.name}
      </p>
      {car.img !== '' ? (
        <img className="card-car__img" src={car.img} />
      ) : (
        <div className="card-car__no-img">
          <div className="card-car__no-img--spinner"></div>
        </div>
      )}
    </div>
  );
};
