import { useState, useEffect } from 'react';

import styles from './Formulario.module.css';
import Resultado from './Resultados'

const Formulario = () => {

    const [abrirResultados, setAbrirResultados] = useState(false);
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [dadosPreenchidos, setDadosPreenchidos] = useState(false);
    const [alturaCalculo, setAlturaCalculo] = useState(0);
    const [pesoCalculo, setPesoCalculo] = useState(0);
    
    useEffect(
        () => {
            peso > 0 && peso < 300 && altura > 0 && altura < 3 && (setDadosPreenchidos(true));
            peso == '' && (setDadosPreenchidos(false));
            altura == '' && (setDadosPreenchidos(false));
            altura > 3 && (setDadosPreenchidos(false));
            peso > 300 && (setDadosPreenchidos(false));
            setAbrirResultados(false);
        }, [altura, peso]
    )

    const gerarResultado = () => {
        setAlturaCalculo(altura);
        setPesoCalculo(peso);
        setAbrirResultados(true)
    }

    function validaPeso (evento) {        
        evento.key !== ',' && evento.key !== '.' && evento.key !== 'Backspace' && isNaN(evento.key) && (evento.preventDefault());
        evento.target.value.length >= 5 && evento.key !== 'Backspace' && (evento.preventDefault());

        if (evento.target.value > 350 && evento.key !== 'Backspace') {
            evento.preventDefault();
        }
    };

    function validaAltura (evento) {
        evento.key !== ',' && evento.key !== '.' && evento.key !== 'Backspace' && isNaN(evento.key) && (evento.preventDefault());
        evento.target.value.length >= 4 && evento.key !== 'Backspace' && (evento.preventDefault());
        evento.target.value.length == 2 && evento.key !== 'Backspace' && (evento.target.value = evento.target.value.charAt(0) + "," + evento.target.value.charAt(1))

        if (evento.target.value > 3 && evento.key !== 'Backspace') {
            evento.preventDefault();
        }
    };

    return (
        <div className='container'>
            <div className={styles.formulario}>
                <h2 className={styles.texto}>Insira os dados e clique em "Calcular" para calcular o IMC</h2>
                <form className={styles.form}>
                    <input className={styles.input} maxLength={3} type='number' placeholder='Altura:' onChange={(e) => setAltura(e.target.value)} onKeyDown={(e) => validaAltura(e)}/>
                    <h4 className={styles.notacao}>m</h4>
                    <input className={styles.input} maxLength={5} type='number' placeholder='Peso:' onChange={(e) => setPeso(e.target.value)} onKeyDown={(e) => validaPeso(e)}/>
                    <h4 className={styles.notacao}>Kg</h4>
                </form>
                <div className={styles.button_div}>
                    <button className={styles.button_submit} type="submit" onClick={(e) => gerarResultado()}>Calcular</button>
                </div>
            </div>
            {dadosPreenchidos == true && abrirResultados == true && (
                <Resultado altura={alturaCalculo} peso={pesoCalculo} />
            )}
            {dadosPreenchidos == false && abrirResultados == true && (
                <>
                    <h2 className={styles.error}>É preciso inserir dados válidos para calcular o IMC corretamente!</h2>
                </>
            )}
        </div>
    )
}
    
export default Formulario;

