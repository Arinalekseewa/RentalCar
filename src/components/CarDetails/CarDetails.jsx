import styles from "./CarDetails.module.css";
import BookingForm from "../BookingForm/BookingForm";
import sprite from "../../assets/sprite.svg";

export default function CarDetails({ id, brand, model, img, engineSize, year, fuelConsumption, type, description, rentalPrice, address = '', rentalConditions, mileage, accessories, functionalities}) {
  if (!id || !brand || !img) return <div>Car data is missing</div>;

  const [street = '', city = '', country = ''] = (address || '').split(',');

  return (
    <div className={styles.cont}>
      <div>
        <img src={img} alt={`${brand} ${model}`} width={640} />
        <div className={styles.form}>
          <div className={styles.title}>
            <h4>Book your car now</h4>
            <p>Stay connected! We are always ready to help you.</p>
          </div>
          <BookingForm carId={id} />
        </div>  
      </div>
      <div className={styles.infocont}>
        <div className={styles.shortInfoCont}>
          <h2 className={styles.title}>{brand} {model}, {year}</h2>
          <p className={styles.infotext}>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-location`}></use>
            </svg>
            {city}, {country} Mileage:{mileage} km</p>
          <p className={styles.spanPrice}>${rentalPrice}</p>
          <p className={styles.infotext}>{description}</p>
        </div>
        <div className={styles.carinfo}>
          <div>
            <h4>Rental Conditions:</h4>
              <ul className={styles.infoText}>
              {rentalConditions.map((condition, index) => (
                <li key={index}>
                  <svg style={{ marginRight: 8 }} width="16" height="16">
                    <use href={`${sprite}#icon-check-circle`}></use>
                  </svg>
                  {condition}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Car Specifications:</h4>
              <ul className={styles.infoText}>
              <li>
                <svg style={{ marginRight: 8 }} width="16" height="16">
                    <use href={`${sprite}#icon-calendar`}></use>
                </svg>
                Year:{year}</li>
              <li>
                <svg style={{ marginRight: 8 }} width="16" height="16">
                    <use href={`${sprite}#icon-car`}></use>
                </svg>
                Type:{type}</li>
              <li>
                <svg style={{ marginRight: 8 }} width="16" height="16">
                    <use href={`${sprite}#icon-fuel-pump`}></use>
                </svg>
                Fuel Consumption:{fuelConsumption}</li>
              <li>
                <svg style={{ marginRight: 8 }} width="16" height="16">
                    <use href={`${sprite}#icon-gear`}></use>
                </svg>
                Engine Size:{engineSize}</li>
            </ul>
          </div>
          <div>
            <h4>Accessories and functionalities:</h4>
              <ul className={styles.infoText}>
  {accessories.map((item, index) => (
    <li key={`acc-${index}`}><svg style={{ marginRight: 8 }} width="16" height="16">
                    <use href={`${sprite}#icon-check-circle`}></use>
                  </svg>{item}</li>
  ))}
  {functionalities.map((func, index) => (
    <li key={`func-${index}`}><svg style={{ marginRight: 8 }} width="16" height="16">
                    <use href={`${sprite}#icon-check-circle`}></use>
                  </svg>{func}</li>
  ))}
</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
