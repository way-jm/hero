import React from 'react';
import Header from "../../components/header"
import styles from '@/pages/index/index.less';

export default function() {
  return (
    <div className={styles.pIndex}>
     <Header title='英雄Club'/>
     <img src={require('./banner.png')} className={styles.banner}/>
     <div className={styles.flag}>
     </div>

    </div>
  );
}
