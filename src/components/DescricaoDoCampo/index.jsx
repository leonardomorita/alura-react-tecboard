import './descricao-do-campo.estilos.css';

/**
 * Componente de descrição do campo de entrada.
 * 
 * @param {object} props 
 * @returns JSX.Element
 */
export function DescricaoDoCampo(props) {
  return (
    <label className="label" htmlFor={props.htmlFor}>{props.children}</label>
  )
}