import './titulo-do-formulario.estilos.css';

/**
 * Componente do título do formulário.
 * 
 * @param {object} props 
 * @returns JSX.Element
 */
export function TituloDoFormulario(props) {
  return (
    <h2 className="titulo-form">{props.children}</h2>
  )
}