import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navigation = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" style={{ width: "120px", height: "26px" }} />
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