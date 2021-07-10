import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/mall.mp4' autoPlay loop muted />
            <h1>Shopping KJP</h1>
            <p>Um novo paraíso a cada corredor.</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'
                >
                    Encontre sua loja agora! <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection
