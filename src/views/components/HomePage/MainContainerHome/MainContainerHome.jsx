import { useEffect, useState } from 'react';
import { getAllCarsRequest } from '../../../../api/api-utils';
import { SearchInput } from '../SearchInput/SearchInput';
import Swal from 'sweetalert2';
import { ResultsContainer } from '../ResultsContainer/ResultsContainer';
import { HeaderEmployee } from '../HeaderEmployee/HeaderEmployee';

export const MainContainerHome = () => {
  const [allCars, setAllCars] = useState([]);
  const [resultsSearch, setResultsSearch] = useState([]);

  const getAllData = async () => {
    const token = localStorage.getItem('token');
    const res = await getAllCarsRequest(token);
    if (res.data?.ok) {
      const orderedCarArr = res.data.cars.sort((a, b) => {
        if (a.brand < b.brand) return -1;
        if (a.brand > b.brand) return 1;
        else return 0;
      });
      setAllCars(orderedCarArr);
      setResultsSearch(orderedCarArr);
    } else {
      Swal.fire({
        icon: 'warning',
        title: `${res}`,
        confirmButtonColor: '#009368',
        iconColor: '#009368',
      });
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <HeaderEmployee />
      <SearchInput setResultsSearch={setResultsSearch} />
      <ResultsContainer carsArr={resultsSearch} />
    </div>
  );
};
