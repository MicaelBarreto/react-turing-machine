import React, { useState, useEffect } from 'react';
import InputSetup from '../../components/setup/InputSetup';

function Setup() {
    const [estados, setEstados] = useState();
    const [entrada, setEntrada] = useState();
    const [fita, setFita] = useState();
    const [transicoes, setTransicoes] = useState([]);
    const [countTransicao, setCountTransicao] = useState(1);
    const [inicial, setInicial] = useState();
    const [branco, setBranco] = useState();
    const [finais, setFinal] = useState();

    useEffect(() => {
        var estados = document.getElementById('estados');
        var finais = document.getElementById('estados');

        
    }, [])

    function handleEstados(event){
        var palavra = event;
        
        if(palavra.lenght > 2 && palavra.lenght % 2 === 0){
            palavra += ',';
        }
        
        setEstados(palavra);
    }

    function handleAdd() {
        var transicoes = Object.values({...transicoes});
        console.log(transicoes);
        console.log(typeof transicoes);
        transicoes.push({'estado': '', 'valor': '', 'transicao': {'estado': '', 'transicao': '', 'movimento': ''}});

        setTransicoes(transicoes);
    }

    function handleTransicao() {

    }

    function getTransicao(transicao) {
        return `(${transicao.estado}, ${transicao.valor}) = (${transicao.transicao.estado}, ${transicao.transicao.valor}, ${transicao.transicao.movimento})`;
    }

    // handleEntrada = event => {
    //     var split = event.split('');
    //     setEstados(split.map(entrada => entrada));
    // }

    return(
        <div>
            <form>
                <div className='form-control'>
                    <label htmlFor="estados">Q</label>
                    <InputSetup value={estados} onChange={e=> handleEstados(e.target.value)} placeholder="q0,q1,q2" />
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
                    {transicoes.map(transicao => (
                        <InputSetup value={() => getTransicao(transicao)} onChange={e => handleTransicao(e.target.value)} placeholder="q3,q4" />
                    ))}
                    <button type="button" className="" id="btn-add" onClick={() => handleAdd()}>Adicionar</button>
                </div>
                <div>
                    <button className="">Rodar</button>
                </div>
            </form>
        </div>
    );

}

export default Setup;