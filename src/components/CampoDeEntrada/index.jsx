import './campo-de-entrada.estilos.css';

/**
 * Componente de campo de entrada.
 * 
 * @param {object} props 
 * @returns JSX.Element
 */
export function CampoDeEntrada(props) {
  return (
    <input {...props} className="campo-entrada-form" />
  )
}