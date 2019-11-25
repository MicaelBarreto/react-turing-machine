import React, { useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import InputFita from '../../components/input/InputFita';


function Run(props) {

    const { fita, estados, entrada, inicial, branco, finais, transicoes } = props.location.state;

    const [estadoAtual, setEstadoAtual] = useState(inicial);
    const [index, setIndex] = useState(0);
    const [fitaFinal, setFitaFinal] = useState(fita);
    const [log, setLog] = useState([]);

    function run() {
        console.log('entrou')
        var flag;
        var flagEstado;
        
        flag = transicoes.map(transicao => {
            if(transicao.estado == estadoAtual && transicao.valor == fitaFinal[index]) {
                step(transicao);
                return true;
            }
        });

        alert(flag)

        flagEstado = finais.find(element => element == estadoAtual);

        alert(flagEstado)

        if(!flag && !flagEstado) {
            alert('Erro: Não existem mais movimentações possiveis');
            props.history.push('/');
        }

        if(!flag && flagEstado) {
            props.history.push({
                pathname: '/log',
                state: {
                    fita,
                    fitaFinal,
                    log
                }
            });
        }

        run();
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
            return <Redirect to='/' />
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
        +'vá para a '+(event.transicao.movimento == 'R' ? 'direita' : 'esquerda')
        +'\n'+log;

        setLog(log);
    }

    return (
        <div className='run'>
            <div className='run-body'>
                <div className='fita'>
                    {fitaFinal.map((f, key) => {
                        if(index == key){
                            return <InputFita key={key} value={f} enabled />
                        } else {
                            return <InputFita key={key} value={f} />
                        }
                    })}
                </div>            
                <div className='log'>
                    <textarea id="log" cols="30" rows="10" value={log} readOnly></textarea>
                </div>
            </div>
            <div className='run-footer'>
                    <button className='run-button' onClick={() => run()}>Rodar</button>
            </div>
        </div>
    )
}

export default withRouter(Run);

