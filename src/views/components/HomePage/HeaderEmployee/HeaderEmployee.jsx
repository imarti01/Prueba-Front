import { useEmployeeContext } from '../../../../hooks/useEmployeeContext';
import './HeaderEmployee.scss';

export const HeaderEmployee = () => {
  const { employeeState } = useEmployeeContext();

  return (
    <header className="header-employee">
      <div className="header-employee__info">
        <h4>
          Num.Empleado: <span>{employeeState.numEmployee}</span>
        </h4>
        <h4>
          Nombre: <span>{employeeState.name}</span>
        </h4>
        <h4>
          Coche favorito:{' '}
          <span>
            {employeeState.favCar
              ? employeeState.favCar.brand + ' ' + employeeState.favCar.name
              : ''}
          </span>
        </h4>
      </div>
    </header>
  );
};
