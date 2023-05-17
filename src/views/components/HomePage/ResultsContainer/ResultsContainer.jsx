import { CardCar } from '../CardCar/CardCar';

export const ResultsContainer = ({ carsArr }) => {
  return (
    <div className="results-container">
      {carsArr.length > 0 && carsArr.map((car) => <CardCar car={car} />)}
    </div>
  );
};
