import React from "react";
import styles from "./carscard.module.css";

const CarsCard = ({ car }) => {
  return (
    <div className={styles.card}>
      <img src={car.image} alt={car.title} className={styles.image} />
      <h2 className={styles.title}>{car.title}</h2>
      <p className={styles.info}>Production Start: {car.start_production}</p>
      <p className={styles.info}>Class: {car.class}</p>
    </div>
  );
};

export default CarsCard;
