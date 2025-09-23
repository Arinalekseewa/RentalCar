import styles from './Cars.module.css'
import { useNavigate } from "react-router-dom";

export default function Cars({ id, brand, model, year, img, rentalPrice, address = '', rentalCompany, type, mileage }) {
  const [street = '', city = '', country = ''] = address.split(',') || [];
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate(`/catalog/${id}`);
  };

    return (
    <li>
        <div className={styles.imgWrapper}>
                <img className={styles.img} src={img} alt={`${brand} ${model}`} width={276} />
        </div>
        <div className={styles.textCont}>
            <h5>{brand} <span>{model}</span>, {year}</h5>
            <h5>${rentalPrice}</h5>
        </div>
          
          <div className={styles.info}>
          <p>
          {city} | {country} | {rentalCompany}
          </p>

        <p>
          {type} | {mileage} km
        </p>
      </div>
        
      <button onClick={handleLearnMoreClick}>Read more</button>
    </li>
  );
}
