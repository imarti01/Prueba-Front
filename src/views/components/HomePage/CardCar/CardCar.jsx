import Swal from 'sweetalert2';
import { useEmployeeContext } from '../../../../hooks/useEmployeeContext';

import './CardCar.scss';
import { editFavCar } from '../../../../api/api-utils';

export const CardCar = ({ car }) => {
  const { employeeState, editFavCarState } = useEmployeeContext();

  const handleFavCar = (e) => {
    if (e.target.checked) {
      Swal.fire({
        title: `Quieres seleccionar ${car.brand} ${car.name} como tu coche favorito?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#009368',
        iconColor: '#009368',
        cancelButtonColor: '#3a3939',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await editFavCar(car._id, employeeState.numEmployee);
          if (res.data?.ok) {
            editFavCarState(car);
            Swal.fire({
              title: `${car.brand} ${car.name} ha sido seleccionado como tu coche favorito!`,
              icon: 'success',
              iconColor: '#009368',
              confirmButtonColor: '#009368',
            });
          }
        }
      });
    }
  };

  return (
    <div key={car._id} className="card-car">
      <input
        type="checkbox"
        name="favCar"
        className="card-car__input"
        onChange={handleFavCar}
        checked={employeeState.favCar?._id === car._id}
      />
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
