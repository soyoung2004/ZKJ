import React from "react"
import styles from "./button.module.css"
import { Routes, Route, Link } from "react-router-dom"

const button = () => {
    return (
        <div className={styles.btn}>
                <btn><button>장바구니</button></btn>
                <btn1><button>바로구매</button></btn1>
            </div>
    )
}



export default button
