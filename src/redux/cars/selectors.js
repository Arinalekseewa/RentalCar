import {selectFilter} from '../filters/selectors';

export const selectCars = (state) => state.cars.items;

export const selectFilteredCars = (state) => {
    const cars = selectCars(state);
    const filter = selectFilter(state);

    return cars.filter(car =>
        car.brand.includes(filter)
    );
};

