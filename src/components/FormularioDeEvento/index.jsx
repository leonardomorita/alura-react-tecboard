import './formulario-de-evento.estilos.css';

import { CampoDeEntrada } from '../CampoDeEntrada';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { DescricaoDoCampo } from '../DescricaoDoCampo';
import { TituloDoFormulario } from '../TituloDoFormulario';
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao';

/**
 * Componente do formulário de evento.
 * 
 * @returns JSX.Element
 */
export function FormularioDeEvento() {
  return (
    <form className="form-evento" action="#">
      <TituloDoFormulario>
        Preencha para criar um evento:
      </TituloDoFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <DescricaoDoCampo htmlFor="nome">Qual é o nome do evento?</DescricaoDoCampo>
          <CampoDeEntrada type="text" id="nome" name="dataEvento" placeholder="Summer dev hits" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <DescricaoDoCampo htmlFor="dataEvento">Data do evento</DescricaoDoCampo>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <DescricaoDoCampo htmlFor="temaEvento">Tema do evento</DescricaoDoCampo>
          <ListaSuspensa name="temaEvento"></ListaSuspensa>
        </CampoDeFormulario>

        <div className='acoes'>
          <Botao>Criar evento</Botao>
        </div>
      </div>
    </form>
  )
}