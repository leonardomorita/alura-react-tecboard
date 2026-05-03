import './lista-suspensa.estilos.css';

/**
 * Componente de lista suspensa do formulário.
 * 
 * @param {object} props 
 * @returns JSX.Element
 */
export function ListaSuspensa(props) {
    return (
        <select id={props.name} className="lista-suspensa-form" name={props.name}>
            <option value="">Selecione uma opção</option>
            {props.itens.map((item, index) => (
                <option key={index} value={item.id}>{item.nome}</option>
            ))}
        </select>
    )
}