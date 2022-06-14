import { useState } from 'react';
import './Header.css';
import logo from './../../assets/enorese-logo.png';

function Header() {
    const [iconMenu, setIconMenu] = useState('icon-menu');
    const [navVisibility, setNavVisibility] = useState('nav-hidden');

    const MenuHandler = () => {
        if (iconMenu === 'icon-menu') {
            setIconMenu('icon-cancel');
            setNavVisibility('nav-visible');
        } else {
            setIconMenu('icon-menu');
            setNavVisibility('nav-hidden');
        }
    }

    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='enorese.dev' />
            </div>

            <nav className={`navigation ${navVisibility}`}>
                <ul>
                    <li>Sobre Mí</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            
            <button className='menu-btn' onClick={MenuHandler}>
                <span className={iconMenu}></span>
            </button>
        </header>
    );
}

export { Header };