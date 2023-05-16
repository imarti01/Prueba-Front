import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import './App.css';
import { EmployeeProvider } from './context/EmployeeContext/EmployeeProvider';

function App() {
  return (
    <>
      <EmployeeProvider>
        <RouterProvider router={router} fallbackElement={<></>} />
      </EmployeeProvider>
    </>
  );
}

export default App;
