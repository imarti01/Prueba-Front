import { useEffect, useState } from 'react';
import { getAllCarsRequest } from '../../../api/api-utils';

export const MainContainerHome = () => {
  const [allCars, setAllCars] = useState([]);

  const getAllData = async () => {
    const token = localStorage.getItem('token');
    const res = await getAllCarsRequest(token);
    console.log(res);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return <div>MainContainerHome</div>;
};
