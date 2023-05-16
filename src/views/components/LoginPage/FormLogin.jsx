import { useState } from 'react';
import { InputElement } from './InputElement';
import { loginRequest } from '../../../api/api-utils';
import { useEmployeeContext } from '../../../hooks/useEmployeeContext';

export const FormLogin = () => {
  const [formLogin, setFormLogin] = useState({ numEmpleado: '', password: '' });

  const { login } = useEmployeeContext();

  const handleFormLogin = ({ target }) => {
    setFormLogin({ ...formLogin, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginRequest(formLogin);
    if (res.data?.ok) {
      login(res.data.employee);
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
