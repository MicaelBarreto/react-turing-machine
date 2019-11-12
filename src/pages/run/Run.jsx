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

    }

    function step() {

    }

    function moveRight() {

    }

    function moveLeft() {

    }

    function handleLog(event) {
        log.unshift();
    }

    return (
        <div>
            <div>
                {fitaFinal.map(fita, key => {
                    //<InputFita key value={fita} enabled={index == key ? true : false} />
                })}
            </div>
            <div>
                <textarea id="log" cols="30" rows="10" value={log.map(l => l)} readOnly></textarea>
            </div>
        </div>
    )
}

export default Run;

