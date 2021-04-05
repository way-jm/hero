import React from 'react';
import styles from "./index.less"

interface HeaderProps {
    title:string
}

const Header:React.FC<HeaderProps> = (props)=>{
    const {title } = props;
    return <div className={styles.mh}>
        <a className={styles.nav}>
            <img src={require('../../assets/nav.png')} alt="nav"/>
        </a>
        <div className={styles.title}>{title}</div>
    </div>
};

export default Header;
