import { CardCar } from '../CardCar/CardCar';
import './ResultsContainer.scss';

export const ResultsContainer = ({ carsArr }) => {
  return (
    <div className="results-container">
      {carsArr.length > 0 &&
        carsArr.map((car) => <CardCar key={car._id} car={car} />)}
    </div>
  );
};
