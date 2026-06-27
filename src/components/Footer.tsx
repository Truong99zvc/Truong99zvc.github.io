import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/tpt134" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Truong99zvc" target="_blank" rel="noreferrer">Truong Truong Phuc</a> with 💜</p>
    </footer>
  );
}

export default Footer;