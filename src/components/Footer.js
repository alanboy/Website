import React from 'react';
import './NavBar.css';
import logo from "../images/w-logo.png";

function Footer() {
  return(
    <div className="Footer">
      <footer id="#contact" className="footer-section container-fluid">
        <h2>Contact Us</h2>
        <p>
            Meeting Time: <br/>
            Tues and Thurs<br/>
            Location <br />
            TBD
        </p>
        <div className="social-section">
          <a className="social-media" href="https://www.instagram.com/dubvelopers_uw/?hl=en"><i class="fab fa-instagram"></i></a>
          <a className="social-media" href="mailto:dubvelopers@uw.edu"><i class="fas fa-envelope"></i></a>
          <a className= "social-media" href="https://discord.gg/FNgd38xhtf"><i class="fab fa-discord"></i></a>
          <p className= "copyright">Copyright 2021 DUBvelopers</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;