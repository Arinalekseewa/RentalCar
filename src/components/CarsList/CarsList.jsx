import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectFilteredCars, setFilteredCars } from "../../redux/filters/slice";
import { fetchCars } from "../../redux/cars/operations";
import styles from './CarsList.module.css';
import Cars from '../Cars/Cars';

export default function CarsList({visibleCount}) {
  const dispatch = useDispatch();
  const cars = useSelector(selectFilteredCars);
  const { isLoading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars())
      .then(({ payload }) => {
        dispatch(setFilteredCars(payload.cars));
      });
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const visibleCars = cars.slice(0, visibleCount);
  
  return (
    <div className={styles.carList}>
      <ul className={styles.list}>
      {visibleCars.map(({ id, brand, model, year, img, rentalPrice, address, rentalCompany, type, mileage }) => (
        <Cars
          key={id}
          id={id}
          brand={brand}
          model={model}
          year={year}
          img={img}
          rentalPrice={rentalPrice}
          address={address}
          rentalCompany={rentalCompany}
          type={type}
          mileage={mileage}
        />
      ))}
    </ul>
    </div>
  );
}
