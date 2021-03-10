import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = ()=>{
    return(
        <nav>
            <ul className={styles.navigation}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                     </Link>
                </li>
                <li>
                    <Link href="/horror-list">
                        <a>Horror list</a>
                    </Link>
                </li>
                    <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contacts">
                        <a>Contact us</a>
                </Link>
                </li>
            </ul>   
        </nav>
    )
}

export default Nav