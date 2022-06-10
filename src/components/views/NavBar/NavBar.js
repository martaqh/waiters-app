import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <h6 className={styles.appName}>Waiter.app</h6>
            <NavLink className={styles.navlink} to="/">Home</NavLink>
        </div>
    )   
}

export default NavBar;