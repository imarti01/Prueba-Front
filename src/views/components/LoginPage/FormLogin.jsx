import { useState } from 'react';
import { InputElement } from './InputElement';
import { loginRequest } from '../../../api/api-utils';
import { useEmployeeContext } from '../../../hooks/useEmployeeContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const FormLogin = () => {
  const [formLogin, setFormLogin] = useState({ numEmpleado: '', password: '' });

  const { login } = useEmployeeContext();
  const navigate = useNavigate();

  const handleFormLogin = ({ target }) => {
    setFormLogin({ ...formLogin, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginRequest(formLogin);
    if (res.data?.ok) {
      login(res.data.employee);
      navigate('/');
    } else {
      Swal.fire({
        icon: 'warning',
        title: `${res}`,
        confirmButtonColor: '#009368',
        iconColor: '#009368',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputElement
        labelText="Num.Empleado"
        type="text"
        name="numEmpleado"
        value={formLogin.numEmpleado}
        onChange={handleFormLogin}
      />
      <InputElement
        labelText="Password"
        type="password"
        name="password"
        value={formLogin.password}
        onChange={handleFormLogin}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};
