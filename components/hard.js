import React, { useState } from 'react';
import styles from "./hard.module.css";

const Hard = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.back}>
      <div className={styles.card1}>
        <img src="./img.png" alt="프레젠테이션2" />
      </div>

      <p>
        <div className={styles.h1}>
          메뉴 선택 개수는 <b>{value}</b>개 입니다.
        </div>
      </p>

      <div className={styles.h2}>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
    </div>
  );
};

export default Hard;