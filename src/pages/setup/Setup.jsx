import React, { useState, useEffect } from 'react';
import InputSetup from '../../components/setup/InputSetup';

function Setup() {
    const [estados, setEstados] = useState();
    const [entrada, setEntrada] = useState();
    const [fita, setFita] = useState();
    const [transicoes, setTransicoes] = useState();
    const [transicao, setTransicao] = useState();
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
        
        if(palavra.lenght > 2 && palavra.lenght % 2 == 0){
            var split = event.split(',').toLowerCase();
            for(var i; i < split.lenght/2; i++ ){
                split = split.replace(/(\d{2})(\d{2})/,"$1,$2");
            }
        }
        
        setEstados(palavra);
    }

    function handleAdd() {
        
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
                    <input type="text" className='form-input' id="entrada" value={entrada} onChange={e => setEntrada(e.target.value)} placeholder="110011" />
                </div>
                <div className='form-control'>
                    <label htmlFor="fita">&Gamma;</label>
                    <input type="text" className='form-input' id="fita" value={fita} onChange={e => setFita(e.target.value)} placeholder="001100" />
                </div>
                <div className='form-control'>
                    <label htmlFor="inicial">q0</label>
                    <input type="text" className='form-input' id="inicial" value={inicial} onChange={e => setInicial(e.target.value)} placeholder="q0" />
                </div>
                <div className='form-control'>
                    <label htmlFor="branco">&empty;</label>
                    <input type="text" className='form-input' id="branco" value={branco} onChange={e => setBranco(e.target.value)} placeholder="&empty;" />
                </div>
                <div className='form-control'>
                    <label htmlFor="finais">F</label>
                    <input type="text" className='form-input' id="finais" value={finais} onChange={e => setFinal(e.target.value)} placeholder="q3,q4" />
                </div>
                <div id="div-add">
                    <label htmlFor="transicao">&delta;</label>
                    <button className="" id="btn-add" onClick={() => handleAdd()}>Adicionar</button>
                </div>
                <div>
                    <button className="">Rodar</button>
                </div>
            </form>
        </div>
    );

}

export default Setup;