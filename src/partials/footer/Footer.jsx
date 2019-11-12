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
            <a href="https://github.com/MicaelBarreto" target="_blank"><img src={github} alt="Github" /></a>
            <a href="https://br.linkedin.com/in/micael-moraes-1538a8185/" target="_blank"><img src={linkedin} alt="Linked In" /></a>
        </div>
    </div>
);

export default Footer;