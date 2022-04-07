//APP

//IMPORTING
//REACT
import React, { Component } from 'react';
//CSS STYLES
import './App.css';
//COMPONENTS
import Container from './components/Container';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
//JSON FILES
import navItems from './data/nav.json';
import services from './data/services.json';
import about from './data/about.json';
import footer from './data/footer.json';

class App extends Component {
  render() {
    return (
      <Container>
        <Hero 
          navItems={navItems.navItems}
        />
        <About about={about.about} />
        <Services services={services.services} />
        <Footer footer={footer}/>
      </Container>
    );
  }
}

export default App;
