import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import InputFita from '../../components/input/InputFita';

import './Log.styles.scss';

const Log = ({ fita, fitaFinal, log }) => (
    <div className='log'>
        <div className='log-header'>
            <h2>Log de operações da fita</h2>
        </div>
        <div className='log-body'>
            <label>Fita Inicial</label>
            {fita.map(f => <InputFita value={f} />)}
        </div>
        <div className='log-body'>
            <label>Fita Final</label>
            {fitaFinal.map(f => <InputFita value={f} />)}
        </div>
        <div className='log-body'>
            <label>Ações</label>
            <textarea className='' value={log} readOnly />
        </div>
        <div className='log-footer'>
            <Link to ='/'>Voltar</Link>
        </div>
    </div>
);

export default withRouter(Log);