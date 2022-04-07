//HERO COMPONENT

//IMPORTING
import React, { Component } from 'react';
import Nav from '../Nav';
import './style.css';

class Hero extends Component {
    render() {
        return (
            <div id="hero_div">
                <Nav navItems={this.props.navItems}/>
                <div id="hero_text_div">
                    <h1>O seu negócio no mundo digital</h1>
                    <p>Vamos transformar o seu negócio para que ele possa atingir inúmeros clientes potenciais de forma prática e rápida.</p>
                </div>
                <div id="buttons_div">
                    <a href="/" className="button button_main">Fale com um consultor</a>
                    <a href="/" className="button">Saiba mais</a>
                </div>
            </div>
        )
    }
}

export default Hero;
