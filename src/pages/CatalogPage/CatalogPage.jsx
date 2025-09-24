import FiltersBox from '../../components/FiltersBox/FiltersBox';
import CarsList from '../../components/CarsList/CarsList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import styles from './CatalogPage.module.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredCars } from "../../redux/filters/slice";

export default function CatalogPage() {
    const [visibleCount, setVisibleCount] = useState(8);
    const cars = useSelector(selectFilteredCars);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12);
    }

    return (
        <div className={styles.container}>
            <FiltersBox />
            <CarsList visibleCount={visibleCount}/>
            
            {visibleCount < cars.length && (
                <LoadMoreBtn onClick={handleLoadMore}/>
            )}
        </div>
    )
}
