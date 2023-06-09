import { EmployeeContext } from './EmployeeContext';

import React, { useReducer } from 'react';
import { employeeReducer } from './employeeReducer';
import { employeeTypes } from '../types/employeeTypes';

export const EmployeeProvider = ({ children }) => {
  const [employeeState, dispatch] = useReducer(employeeReducer, {
    numEmployee: null,
    name: null,
    favCar: null,
  });

  const login = (employee) => {
    localStorage.setItem('token', employee.token);
    dispatch({
      type: employeeTypes.login,
      payload: {
        numEmployee: employee.numEmployee,
        name: employee.name,
        favCar: employee?.favCar,
      },
    });
  };

  const editFavCarState = (favCar) => {
    dispatch({ type: employeeTypes.changeFavCar, payload: favCar });
  };

  return (
    <EmployeeContext.Provider value={{ employeeState, login, editFavCarState }}>
      {children}
    </EmployeeContext.Provider>
  );
};
