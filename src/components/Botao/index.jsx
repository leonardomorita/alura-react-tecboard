import './botao.estilos.css';

/**
 * Componente de botão do formulário.
 * 
 * @param {object} props 
 * @returns JSX.Element
 */
export function Botao(props) {
    return (
        <button className="botao-form">{props.children}</button>
    )
}