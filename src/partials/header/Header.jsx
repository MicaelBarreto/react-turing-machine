import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.styles.scss';

const Header = () => (
    <div className="header">
        <Link to='/'>
            <h1>Maquina de Turing</h1>
        </Link>
    </div>
);

export default withRouter(Header);