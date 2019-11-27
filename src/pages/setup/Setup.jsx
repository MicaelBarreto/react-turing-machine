import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import InputSetup from '../../components/setup/InputSetup';
import Modal from '../../components/modal/Modal';

import './Setup.styles.scss';

function Setup(props) {
    const [estados, setEstados] = useState('');
    const [entrada, setEntrada] = useState('');
    const [fita, setFita] = useState();
    const [transicoes, setTransicoes] = useState([]);    
    const [countTransicao, setCountTransicao] = useState(0);
    const [inicial, setInicial] = useState();
    const [branco, setBranco] = useState();
    const [finais, setFinal] = useState();
    const [showModal, setModal] = useState(false);

    const transicao = {'estado': '', 'valor': '', 'transicao': {'estado': '', 'transicao': '', 'movimento': ''}};

    function handleAdd() {
        if (!showModal){
            transicoes[countTransicao+1] = {'estado': '', 'valor': '', 'transicao': {'estado': '', 'transicao': '', 'movimento': ''}};

            setTransicoes(transicoes);
            setCountTransicao(countTransicao+1);
            setModal(true);
        } else {
            transicoes.pop();
            setTransicoes(transicoes);
            setCountTransicao(countTransicao-1);
            setModal(false);
        }
    }

    function handleSetTransiction(values) {
        transicoes[countTransicao] = values;
        setTransicoes(transicoes);
        setModal(false);
    }

    function handleRun(finais, estados, entrada, fita) {
        finais = finais.split(',');
        estados = estados.split(',');
        entrada = entrada.split(',');
        fita = fita.split('');

        props.history.push({
            pathname: '/run',
            state: {
                fita,
                estados,
                entrada,
                inicial,
                branco,
                finais,
                transicoes                    
            }
        });
    }

    return(
        <div className='content'>
            <Modal 
                showModal={showModal} 
                transicao={transicao} 
                onSubmit={values => handleSetTransiction(values)} 
                onClose={() => handleAdd()} 
                estados={estados.split(',')} 
                entradas={entrada.split(',')} 
            />
            <form onSubmit={event => event.preventDefault()}>
                <div className='form-top'>
                    <div className='form-content'>
                        <div className='form-control'>
                            <label htmlFor="estados">Q</label>
                            <InputSetup value={estados} onChange={e=> setEstados(e.target.value)} placeholder="q0,q1,q2" />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="inicial">q0</label>
                            <InputSetup value={inicial} onChange={e => setInicial(e.target.value)} placeholder="q0" />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="finais">F</label>
                            <InputSetup value={finais} onChange={e => setFinal(e.target.value)} placeholder="q3,q4" />
                        </div>
                    </div>
                    <div className='form-content'>
                        <div className='form-control'>
                            <label htmlFor="entrada">&Sigma;</label>                    
                            <InputSetup value={entrada} onChange={e => setEntrada(e.target.value)} placeholder="0,1" />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="fita">&Gamma;</label>    
                            <InputSetup value={fita} onChange={e => setFita(e.target.value)} placeholder="110011" />
                        </div>
                        
                        <div className='form-control'>
                            <label htmlFor="branco">&empty;</label>
                            <InputSetup value={branco} onChange={e => setBranco(e.target.value)} placeholder="&empty;" />
                        </div>
                    </div>
                </div>

                <div id="div-add">
                    <div className='transictions'>
                        {Object.values(transicoes).map((transicao, key) => (
                            <InputSetup
                                key={key}
                                value={`(${transicao.estado}, ${transicao.valor}) = (${transicao.transicao.estado}, ${transicao.transicao.transicao}, ${transicao.transicao.movimento})`}
                                placeholder="q3,q4" 
                                readOnly />
                        ))}
                    </div>
                    <button type="button" className="btn-add" id="btn-add" onClick={() => handleAdd()}>&delta;</button>
                </div>
                <div className='run-div'>
                    <button className="run-button" onClick={() => handleRun(finais, estados, entrada, fita)}>Rodar</button>
                </div>
            </form>
        </div>
    );

}

export default withRouter(Setup);