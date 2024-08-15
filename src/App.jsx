import React, { useState } from "react";
import CarsCard from "./assets/components/CarsCard/CarsCard";
import data from "./assets/data.json";
import styles from "./App.module.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = data.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(data.length / carsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={currentPage === i ? styles.active : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage > 2) {
        pages.push(
          <button
            key={1}
            onClick={() => paginate(1)}
            className={currentPage === 1 ? styles.active : ""}
          >
            1
          </button>
        );
        if (currentPage > 3) {
          pages.push(
            <span key="ellipsis1" className={styles.ellipsis}>
              ...
            </span>
          );
        }
      }

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={currentPage === i ? styles.active : ""}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 1) {
        if (currentPage < totalPages - 2) {
          pages.push(
            <span key="ellipsis2" className={styles.ellipsis}>
              ...
            </span>
          );
        }
        pages.push(
          <button
            key={totalPages}
            onClick={() => paginate(totalPages)}
            className={currentPage === totalPages ? styles.active : ""}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className={styles.container}>
      <h1>Car List</h1>
      <div className={styles.cardContainer}>
        {currentCars.map((car, index) => (
          <CarsCard key={index} car={car} />
        ))}
      </div>
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
            className={styles.arrow}
          >
            &lt;
          </button>
        )}
        {renderPagination()}
        {currentPage < totalPages && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className={styles.arrow}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
