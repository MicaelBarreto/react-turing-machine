import React from 'react';
import './Modal.styles.scss';

import InputSetup from '../setup/InputSetup';

const Modal = ({ transicao, showModal, onSubmit, onClose }) => (
    <div className={"modal" + (showModal ? " display-block" : " display-none")}>
        <div className="modal-main">
            <div className="modal-head">
                <h2>Adicione as informações da transição</h2>
                <button onClick={() => onClose()}>Sair</button>
            </div>
            <div className="modal-body">
                (<div className='input-informações'>
                    <label>Estado</label>
                    <InputSetup key='estado' placeholder="q0" onChange={e => transicao.estado = e.target.value} />
                </div>,
                <div className='input-informações'>
                    <label>Valor</label>
                    <InputSetup key='valor' placeholder="1" onChange={e => transicao.valor = e.target.value} />
                </div>) = 
                (<div className='input-informações'>
                    <label>Estado</label>
                    <InputSetup key='transicao-estado' placeholder="q1" onChange={e => transicao.transicao.estado = e.target.value} />
                </div>,
                <div className='input-informações'>
                    <label>Transição</label>
                    <InputSetup key='transicao' placeholder="0" onChange={e => transicao.transicao.transicao = e.target.value} />
                </div>,
                <div className='input-informações'>
                    <label>Movimento</label>
                    <select id='movimento'onChange={e => transicao.transicao.movimento = e.target.value} >
                        <option value="">--- Selecione a direção do movimento ---</option>
                        <option value="R">Direita</option>
                        <option value="L">Esquerda</option>
                    </select>
                </div>)
            </div>
            <div className="modal-footer">
                <button type="button" onClick={() => onSubmit(transicao)}>Adicionar</button>
            </div>
        </div>
    </div>
);

export default Modal;