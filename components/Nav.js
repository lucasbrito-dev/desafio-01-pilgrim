import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="h-12 p-2 text-white flex items-center justify-start" style={{background: '#000'}}>
            <ul className="flex justify-center items-center" style={{listStyle: 'none'}}>
               <li style={{margin: '5px 15px'}}>
                <Link href='/'>Catálogo</Link>
               </li>
               <li style={{margin: '5px 15px'}}>
                <Link href='/about'>Sobre</Link>
               </li> 
            </ul>
        </nav>
    )
}

export default Nav
