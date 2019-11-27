import React from 'react';
import './Modal.styles.scss';

const Modal = ({ transicao, showModal, onSubmit, onClose, estados, entradas }) => (
    <div className={"modal" + (showModal ? " display-block" : " display-none")}>
        <div className="modal-main">
            <div className="modal-head">
                <h2>Adicione as informações da transição</h2>
            </div>
            <div className="modal-body">
                (<div className='input-informações'>
                    <label>Estado</label>
                    <select id='estado' onChange={e => transicao.estado = e.target.value} >
                        <option value="">estado</option>
                        {estados.map(estado => (
                            <option value={estado}>{estado}</option>
                        ))}
                    </select>
                </div>,
                <div className='input-informações'>
                    <label>Valor</label>
                    <select id='entrada' onChange={e => transicao.valor = e.target.value} >
                        <option value="">entrada</option>
                        {entradas.map(entrada => (
                            <option value={entrada}>{entrada}</option>
                        ))}
                    </select>
                </div>) = 
                (<div className='input-informações'>
                    <label>Estado</label>
                    <select id='trans-estado' onChange={e => transicao.transicao.estado = e.target.value} >
                        <option value="">estado</option>
                        {estados.map(estado => (
                            <option value={estado}>{estado}</option>
                        ))}
                    </select>
                </div>,
                <div className='input-informações'>
                    <label>Transição</label>
                    <select id='trans-entrada' onChange={e => transicao.transicao.transicao = e.target.value} >
                        <option value="">entrada</option>
                        {entradas.map(entrada => (
                            <option value={entrada}>{entrada}</option>
                        ))}
                    </select>
                </div>,
                <div className='input-informações'>
                    <label>Movimento</label>
                    <select id='trans-movimento' onChange={e => transicao.transicao.movimento = e.target.value} >
                        <option value="">movimento</option>
                        <option value="R">Direita</option>
                        <option value="L">Esquerda</option>
                    </select>
                </div>)
            </div>
            <div className="modal-footer">                
                <button className="modal-button danger" onClick={() => {
                    document.getElementById('estado').value = "";
                    document.getElementById('entrada').value = "";
                    document.getElementById('trans-estado').value = "";
                    document.getElementById('trans-entrada').value = "";
                    document.getElementById('trans-movimento').value = "";
                    onClose();
                }}>Sair</button>

                <button type="button" className="modal-button success" onClick={() => {
                    document.getElementById('estado').value = "";
                    document.getElementById('entrada').value = "";
                    document.getElementById('trans-estado').value = "";
                    document.getElementById('trans-entrada').value = "";
                    document.getElementById('trans-movimento').value = "";
                    onSubmit(transicao)
                }}>Adicionar</button>
            </div>
        </div>
    </div>
);

export default Modal;