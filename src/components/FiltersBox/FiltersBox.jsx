import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBrands } from "../../redux/filters/operations";
import { selectBrands, selectUniquePrices } from "../../redux/filters/selectors";
import { selectCars } from "../../redux/cars/selectors";
import { setFilteredCars } from "../../redux/filters/slice";
import styles from "./FiltersBox.module.css";
import Select from "react-select";

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
  const priceOptions = prices.map(price => ({ value: price, label: price }));

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  // Форматування числа з комами
  const formatNumber = (value) => {
    if (!value) return "";
    const num = value.replace(/\D/g, ""); // лишаємо тільки цифри
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // додаємо коми
  };

  const handleMinMileageChange = (e) => {
    const raw = e.target.value.replace(/^From\s*/, "");
    setMinMileage(formatNumber(raw));
  };

  const handleMaxMileageChange = (e) => {
    const raw = e.target.value.replace(/^To\s*/, "");
    setMaxMileage(formatNumber(raw));
  };

  const handleFilter = () => {
    let filtered = cars;

    if (selectedBrand) {
      filtered = filtered.filter(c => c.brand === selectedBrand);
    }
    if (selectedPrice) {
      filtered = filtered.filter(c => Number(c.rentalPrice) === Number(selectedPrice));
    }
    if (minMileage) {
      filtered = filtered.filter(c => c.mileage >= Number(minMileage.replace(/,/g, "")));
    }
    if (maxMileage) {
      filtered = filtered.filter(c => c.mileage <= Number(maxMileage.replace(/,/g, "")));
    }

    dispatch(setFilteredCars(filtered));
  };

  return (
    <div className={styles.searchBox}>
      <div className={styles.filter}>
        <label htmlFor="brand" className={styles.label}>
          Car brand
        </label>
        <Select
          className={styles.select}
          classNamePrefix="rs"
          options={brandOptions}
          isSearchable
          name="brand"
          value={brandOptions.find(option => option.value === selectedBrand) || null}
          onChange={option => setSelectedBrand(option?.value || "")}
          placeholder="Choose a brand"
        />
      </div>

      <div className={styles.filter}>
        <label htmlFor="price" className={styles.label}>
          Price / 1 hour
        </label>
        <Select
          className={styles.select}
          classNamePrefix="rs"
          options={priceOptions}
          isSearchable
          name="price"
          value={priceOptions.find(option => option.value === selectedPrice) || null}
          onChange={option => setSelectedPrice(option?.value || "")}
          placeholder="Choose a price"
          formatOptionLabel={(option, { context }) => {
            return context === "value" ? `To $${option.value}` : option.label;
          }}
        />
      </div>

      <div className={styles.filter}>
        <label htmlFor="mileage" className={styles.label}>
          Car mileage / km
        </label>
        <div className={styles.input}>
          <input
            className={styles.left}
            type="text"
            placeholder="From"
            value={`From ${minMileage}`}
            onChange={handleMinMileageChange}
          />
          <input
            className={styles.right}
            type="text"
            placeholder="To"
            value={`To ${maxMileage}`}
            onChange={handleMaxMileageChange}
          />
        </div>
      </div>

      <button className={styles.searchBtn} onClick={handleFilter}>Search</button>
    </div>
  );
}
