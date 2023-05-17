export const ResultsContainer = ({ carsArr }) => {
  return (
    <ul>
      {carsArr.length > 0 &&
        carsArr.map((car) => (
          <li>
            <input type="radio" name="favCar" value={car._id} />
            {car.brand} {car.name}{' '}
            {car.img !== '' ? <img src={car.img} /> : <div>No Img</div>}
          </li>
        ))}
    </ul>
  );
};
