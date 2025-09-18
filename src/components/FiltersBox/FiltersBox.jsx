import { useState } from "react";
import sprite from '../../assets/sprite.svg';
import styles from './FiltersBox.module.css';

export default function FiltersBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const handleSelect = (option) => {
        setSelected(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div>
            <button
                type="button"
                className={styles.filterBtn}
                onClick={handleSelect}
            >
                <span className={styles.filterText}>Choose a brand</span>
                <svg className={styles.filterIcon}>
                    <use href={`${sprite}#icon-arrow-down`} />
                </svg>
            </button>

            <button
                type="button"
                className={styles.filterBtn}
                onClick={handleSelect}
            >
                <span className={styles.filterText}>Choose a brand</span>
                <svg className={styles.filterIcon}>
                    <use href={`${sprite}#icon-arrow-down`} />
                </svg>
            </button>

            
        </div>
    );
};