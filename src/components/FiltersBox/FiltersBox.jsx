import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBrands } from "../../redux/filters/operations";
import { selectBrands, selectUniquePrices } from "../../redux/filters/selectors";
import { selectCars } from "../../redux/cars/selectors";
import { setFilteredCars } from "../../redux/filters/slice";
import styles from "./FiltersBox.module.css";
import Select from 'react-select';

export default function FiltersBox() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const brands = useSelector(selectBrands);
  const prices = useSelector(selectUniquePrices);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
    const [maxMileage, setMaxMileage] = useState("");
    
    const brandOptions = brands.map(brand => ({ value: brand, label: brand }));

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleFilter = () => {
    let filtered = cars;

    if (selectedBrand) filtered = filtered.filter(c => c.brand === selectedBrand);
    if (selectedPrice) filtered = filtered.filter(c => Number(c.rentalPrice) === Number(selectedPrice));
    if (minMileage) filtered = filtered.filter(c => c.mileage >= Number(minMileage));
    if (maxMileage) filtered = filtered.filter(c => c.mileage <= Number(maxMileage));

    dispatch(setFilteredCars(filtered));
  };

  return (
    <div className={styles.searchBox}>
        <div className={styles.filter}>
            <label htmlFor="brand" className={styles.label}>Car brand</label>
            <select id="brand" value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
        <option value="" className={styles.placeholder}>Choose a brand</option>
        {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
        ))}
            </select>
          </div>
          
          <div className={styles.filter}>
              <label htmlFor="price" className={styles.label}>Price/ 1 hour</label>
      <select id="price" value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}>
        <option value="">Choose a price</option>
        {prices.map(price => (
          <option key={price} value={price}>{price}$</option>
        ))}
      </select>
          </div>
          
    <div className={styles.filter}>
        <label htmlFor="price" className={styles.label}>Сar mileage / km</label>
        <div className={styles.input}>
            <input type="number" placeholder="From" value={minMileage} onChange={e => setMinMileage(e.target.value)} />
            <input type="number" placeholder="To" value={maxMileage} onChange={e => setMaxMileage(e.target.value)} />    
        </div>
              
    </div>

      <button onClick={handleFilter}>Search</button>
    </div>
  );
}
