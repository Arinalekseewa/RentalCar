import FiltersBox from '../../components/FiltersBox/FiltersBox';
import CarsList from '../../components/CarsList/CarsList';
// import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import styles from './CatalogPage.module.css';

export default function CatalogPage() {


    return (
        <div className={styles.container}>
            {/* <FiltersBox /> */}
            <CarsList />
            {/* <LoadMoreBtn/> */}
        </div>
    )
}