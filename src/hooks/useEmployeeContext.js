import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext/EmployeeContext';

export const useEmployeeContext = () => useContext(EmployeeContext);
