import styles from './Cars.module.css'

export default function Cars({ brand, model, year, img, rentalPrice, address = '', rentalCompany, type, mileage }) {
  const [street = '', city = '', country = ''] = address.split(',') || [];
  
    return (
    <li>
        <div>
                <img className={styles.img} src={img} alt={`${brand} ${model}`} width={268} />
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
        
      <button>Read more</button>
    </li>
  );
}
