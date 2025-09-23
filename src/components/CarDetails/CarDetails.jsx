import styles from "./CarDetails.module.css";
import BookingForm from "../BookingForm/BookingForm";

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
        <div>
          <h2>{brand} {model}, {year}</h2>
          <p className={styles.infotext}>{city}, {country}  Mileage:{mileage} km</p>
          <p>${rentalPrice}</p>
          <p>{description}</p>
        </div>
        <div className={styles.carinfo}>
          <div>
            <h4>Rental Conditions:</h4>
              <ul>
              {rentalConditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Car Specifications:</h4>
              <ul>
              <li>Year:{year}</li>
              <li>Type:{type}</li>
              <li>Fuel Consumption:{fuelConsumption}</li>
              <li>Engine Size:{engineSize}</li>
            </ul>
          </div>
          <div>
            <h4>Accessories and functionalities:</h4>
              <ul>
  {accessories.map((item, index) => (
    <li key={`acc-${index}`}>{item}</li>
  ))}
  {functionalities.map((func, index) => (
    <li key={`func-${index}`}>{func}</li>
  ))}
</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
