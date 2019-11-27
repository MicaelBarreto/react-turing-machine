import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './Run.styles.scss';


function Run(props) {

    const { fita, estados, entrada, inicial, branco, finais, transicoes } = props.location.state;

    const [estadoAtual, setEstadoAtual] = useState(inicial);
    const [index, setIndex] = useState(0);
    const [fitaFinal, setFitaFinal] = useState(fita);
    const [log, setLog] = useState('');
    const [logs, setLogs] = useState('');

    useEffect(() => {
        var flag;
        var flagEstado;

        setTimeout(() => {
            flag = transicoes.map(transicao => {
                if(transicao.estado == estadoAtual && transicao.valor == fitaFinal[index]) {
                    step(transicao);
                    return true;
                }
            });
            
            flagEstado = finais.filter(element => element == estadoAtual);

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
                        logs
                    }
                });
            }
            
            if(fitaFinal.length === index) {
                
                props.history.push({
                    pathname: '/log',
                    state: {
                        fita,
                        fitaFinal,
                        logs
                    }
                });
            }
        }, 2000);
    });

    function step(transicao) {
        addLog(transicao);
        
        fitaFinal[index] = transicao.transicao.transicao;

        setFitaFinal(fitaFinal);
        setEstadoAtual(transicao.transicao.estado);

        if(transicao.transicao.movimento == 'R') {
            moveRight();
        } else if(transicao.transicao.movimento == 'L') {
            moveLeft();
        } else {
            alert('Erro: Transição inválida');
            props.history.push('/');
        }       
        
    }

    function moveRight() {
        setIndex(index+1);
    }

    function moveLeft() {
        setIndex(index-1);
    }

    function addLog(event) {        
        var log = `Estando no estado ${event.estado} e lendo ${event.valor}: ${event.estado == event.transicao.estado ? 'permaneça no estado ' : 'vá para o estado '}${event.transicao.estado}, altere o valor para ${event.transicao.transicao} e vá para a ${event.transicao.movimento == 'R' ? 'direita' : 'esquerda'}`;
        
        setLog(log);
        setLogs(logs+'\n'+log);
    }

    return (
        <div className='content'>
            <div className='run-body'>
                <div className='fita'>
                    {fitaFinal.map((f, key) => {
                        if(index == key){
                            return <div className='div-fita highlight' id={key}>{f}</div>
                        } else {
                            return <div className='div-fita' id={key}>{f}</div>
                        }
                    })}
                </div>            
                <div className='log'>
                    <textarea className="log-area" id="log" cols="30" rows="10" value={log} readOnly></textarea>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Run);

