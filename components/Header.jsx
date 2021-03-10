import Nav from './Nav'
import styles from '../styles/Header.module.css'

const Header =()=>{
    return(
        <header className={styles.header}>
                <h1>LOGO</h1>
                <Nav />
        </header>   
    )
}

export default Header