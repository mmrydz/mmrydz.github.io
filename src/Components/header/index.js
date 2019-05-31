import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      });
      var techs = this.props.data.techs.map(function(techs){
         var techImage = 'images/technologies/'+ techs.image;
         return <div key={techs.title} className="columns technologies-item">
            <div className="item-wrap">
             <a href={techs.url} title={techs.title}>
                <img alt={techs.title} src={techImage} />
                {/* <div className="overlay">
                   <div className="technologies-item-meta">
                  <h5>{techs.title}</h5>
                      <p>{techs.category}</p>`
                   </div>
                 </div> */}
             </a>
           </div>
         </div>
       });
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Meg Rydzewski</h1>
            <br/>
            <h3 className="job-title">Full Stack Web Developer</h3>
            <hr />
            <div className="technologies-wrapper">
                {techs}
            </div>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="fas fa-chevron-down"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
