import './tema.estilos.css';

/**
 * Componente de tema.
 * 
 * @param {object} props
 * @returns JSX.Element
 */
export function Tema(props) {
  return (
    <h3 className="titulo-tema">{props.tema.nome}</h3>
  )
}