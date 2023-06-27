import React from "react"
import styles from "./header.module.css"
import { Routes, Route, Link } from "react-router-dom"

const Header = () => {
    return (
      <header className={styles.header}>
        <div>
          <div className={styles.logout}>LOG OUT</div>
  
          <div className={styles.main}>
            <h4>킹고오더</h4>
          </div>
        </div>
      </header>
    );
  };
  

export default Header

