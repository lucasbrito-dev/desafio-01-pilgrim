import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
               <li>
                <Link href='/'>Catálogo</Link>
               </li>
               <li>
                <Link href='/about'>Sobre</Link>
               </li> 
            </ul>
        </nav>
    )
}

export default Nav
