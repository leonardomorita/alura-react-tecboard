import './campo-de-formulario.estilos.css';

/**
 * Componente do campo de formulário.
 * 
 * @param {object} props 
 * @returns JSX.Element
 */
export function CampoDeFormulario(props) {
  return (
    <fieldset className="campo-form">{props.children}</fieldset>
  )
}