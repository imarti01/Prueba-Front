import { useState } from 'react';
import { InputElement } from './InputElement';
import { loginRequest } from '../../../api/api-utils';

export const FormLogin = () => {
  const [formLogin, setFormLogin] = useState({ numEmpleado: '', password: '' });

  const handleFormLogin = ({ target }) => {
    setFormLogin({ ...formLogin, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginRequest(formLogin);
    console.log(res);
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
