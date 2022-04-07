//FOOTER COMPONENT

//IMPORTING
import React, { Component } from 'react';
import './style.css';
import logoImg from '../../assets/logo_black.svg';

class Footer extends Component {
    render(){
        return (
            <div id="footer_div">
                <div id="footer_column_div">
                    <div className="footer_column">
                        <img src={logoImg} id="footer_logo" alt="Logo Black" />
                        <p className="left footer_sub">GCM Soluções LTDA<br />99.999.999/0001-99</p>
                    </div>

                    <div className="footer_column">
                        <h1 className="div_heading left footer">Links</h1>
                        <ul>
                            {this.props.footer.links.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer_column">
                        <h1 className="div_heading left footer">Contato</h1>
                        <ul>
                        {this.props.footer.contact.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer_column">
                        <h1 className="div_heading left footer">Explore</h1>
                        <ul>
                        {this.props.footer.explore.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <p className="div_subheading" id="footer_copy">GCOM Transformação Digital © 2022 Todos os direitos reservados</p>
            </div>
        )
    }
}

export default Footer;
