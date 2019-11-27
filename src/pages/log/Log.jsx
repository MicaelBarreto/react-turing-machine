import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Log.styles.scss';

const Log = (props) => (
    <div className='content'>
        <h2>Fita inicial</h2>
        <div className='fita'>
            {props.location.state.fita.map((f, key) => <div className='div-fita' id={key}>{f}</div>)}
        </div>
        <h2>Fita final</h2>
        <div className='fita'>
            {props.location.state.fitaFinal.map((f, key) => <div className='div-fita' id={key}>{f}</div>)}
        </div>
        <h2>Ações</h2>
        <div className='log-body'>            
            <textarea className='log-area' value={props.location.state.logs} readOnly />
        </div>
    </div>
);

export default withRouter(Log);