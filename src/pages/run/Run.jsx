import React, { useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import InputFita from '../../components/input/InputFita';


function Run(props) {

    const { fita, estados, entrada, inicial, branco, finais, transicoes } = props.location.state;

    const [estadoAtual, setEstadoAtual] = useState(inicial);
    const [index, setIndex] = useState(0);
    const [fitaFinal, setFitaFinal] = useState(fita);
    const [log, setLog] = useState([]);


    useEffect(() => {
        run();
    }, [])

    function run() {

        var flag;
        var flagEstado;

        while(1) {
            flag = transicoes.map(transicao => {
                if(transicao.estado == estadoAtual && transicao.valor == fitaFinal[index]) {
                    step(transicao);
                    return true;
                }
            });

            flagEstado = finais.find(element => element == estadoAtual);

            if(!flag && !flagEstado) {
                alert('Erro: Não existem mais movimentações possiveis');
                <Redirect to='/' />
            }

            if(!flag && flagEstado) {
                <Redirect to={{
                    pathname: '/log',
                    state: {
                        fita,
                        fitaFinal,
                        log
                    }
                }} />
            }
        }
    }

    function step(transicao) {
        fitaFinal[index] = transicao.transicao.valor;

        setFitaFinal(fitaFinal);
        setEstadoAtual(transicao.transicao.estado);

        if(transicao.transicao.movimento == 'R') {
            moveRight();
        } else if(transicao.transicao.movimento == 'L') {
            moveLeft();
        } else {
            alert('Erro: Transição inválida');
            <Redirect to='/' />
        }
        
        addLog(transicao);
    }

    function moveRight() {
        setIndex(index+1);
    }

    function moveLeft() {
        setIndex(index-1);
    }

    function addLog(event) {
        log = 'Estando no estado '+event.estado
        +' e lendo '+event.valor+': '
        +(event.estado == event.trasicao.estado ? 'permaneça no estado ' : 'vá para o estado ')+event.trasicao.estado+', '
        +'altere o valor para '+event.trasicao.trasicao+' e '
        +'vá para a '+(transicao.transicao.movimento == 'R' ? 'direita' : 'esquerda')
        +'\n'+log;

        setLog(log);
    }

    return (
        <div className='run'>
            <div className='run-body'>
                <div className='fita'>
                    {fitaFinal.map(f, key => {
                        if(index == key){
                            <InputFita key={key} value={f} enabled />
                        } else {
                            <InputFita key={key} value={f} />
                        }
                    })}
                </div>            
                <div className='log'>
                    <textarea id="log" cols="30" rows="10" value={log} readOnly></textarea>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Run);

