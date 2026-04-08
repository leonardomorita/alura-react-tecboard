import './card-evento.estilos.css';

/**
 * Componente de card de evento.
 * 
 * @param {object} props
 * @returns JSX.Element
 */
export function CardEvento(props) {
    const { evento } = props;
    return (
        <div className="card-evento">
            <img src={evento.capa} alt={`Capa do evento: ${evento.titulo}`} />

            <div className="corpo">
                <p className="tag">{evento.tema.nome}</p>
                <p>{evento.data.toLocaleDateString('pt-BR')}</p>
                <h4 className="titulo">{evento.titulo}</h4>
            </div>
        </div>
    )
}