import { useState } from 'react';
import { InputElement } from '../InputElement/InputElement';
import { loginRequest } from '../../../../api/api-utils';
import { useEmployeeContext } from '../../../../hooks/useEmployeeContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './FormLogin.scss';

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
      });
    }
  };

  return (
    <div className="form-login">
      <form className="form-login__form" onSubmit={handleSubmit}>
        <h2 className="form-login__form--title">Portal Empleado</h2>
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
        <button className="form-login__form--button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
