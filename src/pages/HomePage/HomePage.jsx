import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <title>RentalCar</title>
      <div className={styles.container}>
        <h1>Find your perfect rental car</h1>
        <h2>Reliable and budget-friendly rentals for any journey</h2>
        <a href='/catalog' className={styles.btn}>View Catalog</a>
      </div>
    </>
  );
};