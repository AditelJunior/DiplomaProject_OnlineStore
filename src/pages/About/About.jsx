import React from "react";
import "./styles.scss"

const About = () => {
  return (
    <div className="container">
      <h1 className="pageTitle">Kontakty</h1>
      <p>Praha, Česká republika, <br/> 110 00, Vodičkova 701/31</p>
      
      <ul className="about_contacts_list">
        <li>+420 (551) 12 34 56</li>
        <li>+420 (703) 12 34 56</li>
        <li>+420 (779) 12 34 56</li>
        <li><b>Email:</b> elektronika_cz@seznam.cz</li>
        <li><b>Instagram:</b> <a href="https://www.instagram.com/elektronika_cz/"  rel="noreferrer" target="_blank">@elektronika_cz</a></li>
      </ul>
      <div className="map_container">
      <iframe title='map'style={{width: '100%', height: '100%', border: 0}} frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vodi%C4%8Dkova%20701/31+(ElektronikaCZ)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </div>
  );
};

export default About;
