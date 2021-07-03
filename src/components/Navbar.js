import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import ClientService from "../services/client/ClientService";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logoutAndClose = () => {
    logout();
    closeMobileMenu();
  }

  const logout = () => {
    ClientService.logout();
    window.location.reload();
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  const currentUser = ClientService.getCurrentUser();

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            Shopping KJP <i className='fab fa-typo3'/>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Início
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/mapa' className='nav-links' onClick={closeMobileMenu}>
                Mapa
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/produtos' className='nav-links' onClick={closeMobileMenu}>
                Produtos
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/lojas' className='nav-links' onClick={closeMobileMenu}>
                Lojas
              </Link>
            </li>

            <li>
              {!currentUser && (
                <Link to='/entrar' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Entrar
                </Link>
              )}

              {currentUser && (
                <Link to="/" className='nav-links-mobile' onClick={logoutAndClose}>
                  Sair
                </Link>
              )}
            </li>
          </ul>

          {button && currentUser && (
            <Link to='/' className="login-and-logout" onClick={logout}>
              Sair
            </Link>
          )}

          {button && !currentUser && (
            <Link to='/entrar' className="login-and-logout">
              Entrar
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
