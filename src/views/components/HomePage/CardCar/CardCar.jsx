export const CardCar = ({ car }) => {
  return (
    <div key={car._id} className="results-container__">
      <input type="checkbox" name="favCar" />
      {car.brand} {car.name}{' '}
      {car.img !== '' ? <img src={car.img} /> : <div>No Img</div>}
    </div>
  );
};
