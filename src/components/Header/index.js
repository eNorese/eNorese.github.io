import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import { FaRegAddressCard, FaUserCheck } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { HiLightBulb } from 'react-icons/hi';
import logo from '../../assets/enorese-logo.png';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img className='header__logo__img' src={logo} alt='eNorese.dev' />
      </div>

      <nav className='header__nav'>
        <ul>
          <li><AiFillHome /> Inicio</li>
          <li><FaRegAddressCard /> Sobre Mí</li>
          <li><IoIosRocket /> Experiencia</li>
          <li><HiLightBulb /> Proyectos</li>
          <li><FaUserCheck /> Contacto</li>
        </ul>
      </nav>

      <div className='header__menu-button'>
        <AiOutlineMenu />
      </div>
    </header>
  );
}

export { Header };