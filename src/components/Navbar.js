import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        Shopping KJP <i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Início
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/mapa'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Mapa
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/produtos'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Produtos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/lojas'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Lojas
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/entrar'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Entrar
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Entrar</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
