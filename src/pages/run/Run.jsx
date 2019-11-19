import React, { useState, useEffect } from 'react';
import InputFita from '../../components/input/InputFita';


function Run(props) {
    const [estados, setEstados] = useState(props.estados);
    const [entrada, setEntrada] = useState(props.entrada);
    const [fita, setFita] = useState(props.fita);
    const [transicoes, setTransicoes] = useState(props.transicoes);
    const [transicao, setTransicao] = useState(props.transicao);
    const [inicial, setInicial] = useState(props.inicial);
    const [branco, setBranco] = useState(props.branco);
    const [finais, setFinal] = useState(props.finais);
    const [estadoAtual, setEstadoAtual] = useState('');
    const [index, setIndex] = useState(0);
    const [fitaFinal, setFitaFinal] = useState(props.fita);
    const [log, setLog] = useState([]);

    useEffect(() => {
        run();
    }, [])

    function run() {
        while(1) {
            transicoes.map((transicao, key) => {
                if(transicao.estado == estadoAtual && transicao.valor == fita) {
                    step(transicao);
                }
            });
        }
    }

    function step(transicao) {
        if(transicao.transicao.movimento == 'R') {
            moveRight();
        } else if(transicao.transicao.movimento == 'L') {
            moveLeft();
        }

        setFita();
        setEstadoAtual();
        addLog();
    }

    function moveRight() {
        setIndex(index+1);
    }

    function moveLeft() {
        setIndex(index-1);
    }

    function addLog(event) {
        log.unshift();
    }

    function handleLog() {
        return log.map(l => l+'\n');
    }

    return (
        <div>
            <div>
                {fitaFinal.map(fita, key => {
                    //<InputFita key={key} value={fita} enabled={() => {index == key ? true : false}} />
                })}
            </div>
            <div>
                <textarea id="log" cols="30" rows="10" value={handleLog()} readOnly></textarea>
            </div>
        </div>
    )
}

export default Run;

