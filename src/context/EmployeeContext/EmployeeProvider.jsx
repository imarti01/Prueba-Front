import { EmployeeContext } from './EmployeeContext';

import React, { useReducer } from 'react';
import { employeeReducer } from './employeeReducer';
import { employeeTypes } from '../types/employeeTypes';

export const EmployeeProvider = ({ children }) => {
  const [employeeState, dispatch] = useReducer(employeeReducer, {
    numEmployee: '',
    name: '',
    favCar: '',
  });

  const login = (employee) => {
    localStorage.setItem('token', employee.token);
    dispatch({
      type: employeeTypes.login,
      payload: {
        numEmployee: employee.numEmployee,
        name: employee.name,
        // favCar: employee.favCar
      },
    });
  };

  return (
    <EmployeeContext.Provider value={{ login, employeeState }}>
      {children}
    </EmployeeContext.Provider>
  );
};
