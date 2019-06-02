import React, { Component } from 'react';
import './style.css';


class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>A few of my projects</h1>

            <div id="portfolio-wrapper" className="portfolio">
                {projects}

            </div>
          </div>
      </div>
      <p className="scrolldown">
         <a className="smoothscroll" href="#contact"><i className="fas fa-chevron-down"></i></a>
      </p>
   </section>
    );
  }
}

export default Portfolio;
