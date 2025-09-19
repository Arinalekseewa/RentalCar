export const selectFilter = (state) => state.filters.brand;
export const selectBrands = (state) => state.cars.brands || [];
export const selectSelectedBrand = (state) => state.cars.selectedBrand;
export const selectSelectedPrice = (state) => state.cars.selectedPrice;

export const selectUniquePrices = (state) => {
  const prices = state.cars.items.map(car => Number(car.rentalPrice));
  const uniquePrices = [...new Set(prices)];
  return uniquePrices.sort((a, b) => a - b);
};

export const selectFilteredCarsByMileage = (state, minMileage, maxMileage) => {
  const { items } = state.cars;
  return items.filter(car => {
    const mileage = Number(car.mileage);
    if (minMileage !== null && mileage < minMileage) return false;
    if (maxMileage !== null && mileage > maxMileage) return false;
    return true;
  });
};