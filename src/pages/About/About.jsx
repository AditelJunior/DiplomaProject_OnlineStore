import React from "react";
import "./styles.scss"

const About = () => {
  return (
    <div className="container">
      <h1 className="pageTitle">Контакты</h1>
      <p>Уркуи Салиевой улица, 145а <br/> Свердловский район, Бишкек, 720051</p>
      
      <ul className="about_contacts_list">
        <li>+996 (779) 20 00 10</li>
        <li>+996 (703) 43 44 14</li>
        <li>+996 (779) 20 00 10</li>
        <li><b>Email:</b> arsenalcentrecompany@gmail.com</li>
        <li><b>Instagram:</b> <a href="https://www.instagram.com/arsenalcentre_kg/" target="_blank">@arsenalcentre_kg</a></li>
      </ul>
      <div className="map_container">
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795.9312977721219!2d74.63887515359421!3d42.883824580530295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ca408d6c27%3A0x2d015510d4e6ee3e!2z0JDRgNGB0LXQvdCw0Lsg0KbQtdC90YLRgA!5e0!3m2!1sru!2scz!4v1721812466813!5m2!1sru!2scz" style={{width: '100%', height: '100%', border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default About;
