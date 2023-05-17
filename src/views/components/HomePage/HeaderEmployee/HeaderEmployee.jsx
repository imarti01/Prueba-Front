import { useEmployeeContext } from '../../../../hooks/useEmployeeContext';
import './HeaderEmployee.scss';

export const HeaderEmployee = () => {
  const { employeeState } = useEmployeeContext();

  return (
    <div className="header-employee">
      <div>
        <h3>
          Num.Empleado: <span>{employeeState.numEmployee}</span>
        </h3>
        <h3>
          Nombre: <span>{employeeState.name}</span>
        </h3>
        <h3>
          Coche favorito:{' '}
          <span>{employeeState.favCar ? employeeState.favCar : ''}</span>
        </h3>
      </div>
    </div>
  );
};
