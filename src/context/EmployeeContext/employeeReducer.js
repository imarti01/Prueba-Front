import { employeeTypes } from '../types/employeeTypes';

export const employeeReducer = (state, action) => {
  switch (action.type) {
    case employeeTypes.login:
      return action.payload;

    case employeeTypes.changeFavCar:
      return { ...state, favCar: action.payload };

    default:
      return state;
  }
};
