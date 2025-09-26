import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/logo.svg';

const Navigation = () => {
    return (
        <div className={styles.header}>
            <a href="/">
                <svg width="102" height="16">
                    <use href={`${sprite}#icon-logo`}></use>
                </svg>
            </a>
        <nav className={styles.nav}>
            <NavLink className={styles.link} to="/">
                Home
            </NavLink>
            <NavLink className={styles.link} to="/catalog">
                Catalog
            </NavLink>
        </nav>
        </div>
        
    );
};

export default Navigation;