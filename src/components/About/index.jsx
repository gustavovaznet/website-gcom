//ABOUT COMPONENT

//IMPORTING
import React, { Component } from 'react';
import './style.css';

class About extends Component {
    render() {
        return (
            <div id="about_div">
                <h1 className="div_heading">Sobre Nós</h1>
                <p className="div_subheading">Nossa missão é proporcionar a transformação digital para os nossos clientes através de</p>
                <div id="about_list_div">

                    {this.props.about.map((item, i) => {
                        return (
                            <div key={i} className="about_item_div">
                                <div className="about_image_div">
                                    <img src={item.image} alt={item.heading} />
                                </div>
                                <div className="about_text_div">
                                    <h1>{item.heading}</h1>
                                    <p className="div_subheading left">{item.paragraph}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default About;
