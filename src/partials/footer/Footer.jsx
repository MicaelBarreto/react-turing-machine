import React from 'react';
import './Footer.styles.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.png';

const Footer = () => (
    <div className="footer">
        <div>
            Criado por Micael Barreto de Moraes
        </div>
        <div className="link">
            <a href="" target="_blank"><img src={github} alt="Github" /></a>
            <a href="" target="_blank"><img src={linkedin} alt="Linked In" /></a>
        </div>
    </div>
);

export default Footer;