import { Navigate } from 'react-router-dom';
import { useEmployeeContext } from '../hooks/useEmployeeContext';

export const PrivateRoute = ({ children }) => {
  const { employeeState } = useEmployeeContext();
  const { numEmployee } = employeeState;

  if (!numEmployee) return <Navigate to="/login" replace />;

  return children;
};
