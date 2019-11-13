import React from 'react';
import './Modal.styles.scss';

const Modal = ({ transicao, showModal, onSubmit }) => (
    <div className={"modal" + (showModal ? " display-block" : " display-none")}>
        <div className="modal-main">
            <div className="modal-head">
                <h2>Adicione as informações da transição</h2>
            </div>
            <div className="modal-body">
                (<div className='input-informações'>
                    <label>Estado</label>
                    <InputSetup value={transicao.estado} onChange={e => transicao.estado = e.target.value} placeholder="q0" />
                </div>,
                <div className='input-informações'>
                    <label>Valor</label>
                    <InputSetup value={transicao.valor} onChange={e => transicao.valor = e.target.value} placeholder="1" />
                </div>) = 
                (<div className='input-informações'>
                    <label>Estado</label>
                    <InputSetup value={transicao.transicao.estado} onChange={e => transicao.transicao.estado = e.target.value} placeholder="q1" />
                </div>,
                <div className='input-informações'>
                    <label>Transição</label>
                    <InputSetup value={transicao.transicao.transicao} onChange={e => transicao.transicao.transicao = e.target.value} placeholder="0" />
                </div>,
                <div className='input-informações'>
                    <label>Movimento</label>
                    <select onChange={e => transicao.transicao.movimento = e.target.value}>
                        <option value="">--- Selecione a direção do movimento</option>
                        <option value="R">Direita</option>
                        <option value="L">Esquerda</option>
                    </select>
                </div>)
            </div>
            <div className="modal-footer">
                <button type="button" onClick={() => onSubmit(transicao)}></button>
            </div>
        </div>
    </div>
);

export default Modal;