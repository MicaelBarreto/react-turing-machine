import React, { useState } from 'react';
import InputSetup from '../../components/setup/InputSetup';
import Modal from '../../components/modal/Modal';

function Setup() {
    const [estados, setEstados] = useState();
    const [entrada, setEntrada] = useState();
    const [fita, setFita] = useState();
    const [transicoes, setTransicoes] = useState([]);
    const [transicao, setTransicao] = useState({'estado': '', 'valor': '', 'transicao': {'estado': '', 'transicao': '', 'movimento': ''}});
    const [countTransicao, setCountTransicao] = useState(0);
    const [inicial, setInicial] = useState();
    const [branco, setBranco] = useState();
    const [finais, setFinal] = useState();
    const [showModal, setModal] = useState(false);

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

    function handleTransicao(event) {
        console.log(event);
    }

    function getTransicao(transicao) {
        return `(${transicao.estado}, ${transicao.valor}) = (${transicao.transicao.estado}, ${transicao.transicao.valor}, ${transicao.transicao.movimento})`;
    }

    function handleSetTransiction(values) {

    }

    function handleRun() {
        finais = finais.split(',');
        estados = estados.split(',');
        entrada = entrada.split(',');
        fita = fita.split(',');

        <Redirect 
            to={{
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
            }}
        />
    }

    return(
        <div>
            <Modal showModal={showModal} transicao={transicao} onSubmit={values => handleSetTransiction(values)} onClose={() => handleAdd()} />
            <form>
                <div className='form-control'>
                    <label htmlFor="estados">Q</label>
                    <InputSetup value={estados} onChange={e=> setEstados(e.target.value)} placeholder="q0,q1,q2" />
                </div>
                <div className='form-control'>
                    <label htmlFor="entrada">&Sigma;</label>                    
                    <InputSetup value={entrada} onChange={e => setEntrada(e.target.value)} placeholder="110011" />
                </div>
                <div className='form-control'>
                    <label htmlFor="fita">&Gamma;</label>    
                    <InputSetup value={fita} onChange={e => setFita(e.target.value)} placeholder="110011" />
                </div>
                <div className='form-control'>
                    <label htmlFor="inicial">q0</label>
                    <InputSetup value={inicial} onChange={e => setInicial(e.target.value)} placeholder="q0" />
                </div>
                <div className='form-control'>
                    <label htmlFor="branco">&empty;</label>
                    <InputSetup value={branco} onChange={e => setBranco(e.target.value)} placeholder="&empty;" />
                </div>
                <div className='form-control'>
                    <label htmlFor="finais">F</label>
                    <InputSetup value={finais} onChange={e => setFinal(e.target.value)} placeholder="q3,q4" />
                </div>
                <div id="div-add">
                    <label htmlFor="transicao">&delta;</label>
                    {console.log(transicoes)}
                    {Object.values(transicoes).map((transicao, key) => (
                        <InputSetup value={() => getTransicao(transicao)} onChange={e => handleTransicao(e.target)} placeholder="q3,q4" />
                    ))}
                    <button type="button" className="" id="btn-add" onClick={() => handleAdd()}>Adicionar</button>
                </div>
                <div>
                    <button className="" onClick={() => handleRun()}  >Rodar</button>
                </div>
            </form>
        </div>
    );

}

export default Setup;