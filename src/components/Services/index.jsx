//SERVICES COMPONENT

//IMPORTING
import React, { Component } from 'react';
import "./style.css";

class Services extends Component {
    render() {
        return (
            <div id="services_div">
                <h1 className="div_heading light">Nossos Serviços</h1>
                <div id="services_list_div">

                    {this.props.services.map((item, i) => {
                        return (
                            <div key={i} className="services_item_div">
                                <img src={item.image} alt={item.heading} />
                                <h1 className="div_heading light">{item.heading}</h1>
                                <p className="div_subheading light left">{item.paragraph}</p>
                                <a className="button" href={item.href}>Saiba Mais</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Services;
