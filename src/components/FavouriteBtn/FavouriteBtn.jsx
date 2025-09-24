import { useDispatch, useSelector } from "react-redux";
import styles from "./FavouriteBtn.module.css";
import { toggleFavourite } from '../../redux/cars/slice';
import sprite from '../../assets/sprite.svg';

export default function FavouriteBtn({ carId }) {
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.cars.favourites);

    const isFavourite = favourites.includes(carId);

    return (
        <button className={styles.favbtn} onClick={() => dispatch(toggleFavourite(carId))}>
            <svg style={{ fill: isFavourite ? 'var(--button)' : '#fff' }} width="16" height="16">
                <use href={`${sprite}${isFavourite ? "#icon-heart" : "#icon-empty-heart"}`}></use>
            </svg>
        </button>
    )
}