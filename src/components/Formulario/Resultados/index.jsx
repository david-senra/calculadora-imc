import styles from './Resultado.module.css';

const Resultado = ({ altura, peso }) => {

    const calculoIMC = (parseFloat(peso) / parseFloat(altura*altura)).toFixed(2);
    const avaliacaoIMC = (IMC) => {
        let resultado = "";
        IMC < 18.5 && (resultado = 'abaixo do peso');
        18.5 <= IMC && IMC < 25 && (resultado = 'no peso ideal');
        25 <= IMC && IMC < 30 && (resultado = 'acima do peso');
        30 <= IMC && IMC < 35 && (resultado = 'obesidade grau I');
        35 <= IMC && IMC < 40 && (resultado = 'obesidade grau II');
        40 <= IMC && (resultado = 'obesidade grau III');
        return resultado;
    }

    return (
        <div className='container'>
            <div className={styles.resultado}>
                <h2 className={styles.texto}>O IMC calculado foi de: <span className={styles.spam}>{calculoIMC}</span>.</h2>
                <h2 className={styles.texto}>Este IMC está classificado como <span className={styles.spam}>{avaliacaoIMC(calculoIMC)}</span>.</h2>
            </div>
        </div>
    )
}
    
export default Resultado;

