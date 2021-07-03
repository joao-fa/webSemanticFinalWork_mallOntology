import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onclick, 
    buttonStyle, 
    buttonSize,
    loggedIn
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];

    if (!loggedIn) {
        return( 
            <Link to='/entrar' className='btn-mobile'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick} type={type}>
                    {children}
                </button>
            </Link>
        )
    } else {
        return(
            <Link to='/mapa' className='btn-mobile'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick} type={type}>
                    {children}
                </button>
            </Link>
        )
    }
};
