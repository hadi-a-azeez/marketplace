import React from "react";
import styles from "./css/dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card_store_info}>
          <div className={styles.store_card_content}>
            <h1 className={styles.store_card_heading}>Naz shop</h1>
            <hr className={styles.line} />
            <h1 className={styles.store_card_address}>Koduvally, calicut</h1>
          </div>
        </div>
        <button className={styles.btn}>
          <Link
            to="/add_product"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            ADD PRODUCTS
          </Link>
        </button>
        <div className={styles.heading_block}>
          <h1 className={styles.heading_bold}>Dashboard</h1>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1 className={styles.card_heading}>Store visits</h1>
              <h1 className={styles.card_data_bold}>299</h1>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1 className={styles.card_heading}>Messages started</h1>
              <h1 className={styles.card_data_bold}>78</h1>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1 className={styles.card_heading}>Total products</h1>
              <h1 className={styles.card_data_bold}>18</h1>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1 className={styles.card_heading}>Categories</h1>
              <h1 className={styles.card_data_bold}>6</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
