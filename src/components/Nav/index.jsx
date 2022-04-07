//NAV COMPONENT

//IMPORTING
import React, { Component } from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';

class Nav extends Component {
    render() {
        return (
            <div id="nav_bar">
                <div id="nav_logo_div">
                    <img src={logoImg} id="nav_logo" alt="Logo" />
                </div>
                <div id="nav_list_items_div">
                    <ul id="nav_list">

                        {this.props.navItems.map((item, i) => {
                            return (
                                <li key={i} className="nav_list_item">
                                    <a href={item.href}>{item.page}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;
