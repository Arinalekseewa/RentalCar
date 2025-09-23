export const selectCars = (state) => state.cars.items || [];
export const selectCarById = (state, id) => state.cars.carById[id];