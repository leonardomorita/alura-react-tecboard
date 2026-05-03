import './App.css';
import { useState } from 'react';
import { Banner } from './components/Banner';
import { CardEvento } from './components/CardEvento';
import { FormularioDeEvento } from './components/FormularioDeEvento';
import { Tema } from './components/Tema';

function App() {
  const temas = [
    {id: 1, nome: 'front-end'},
    {id: 2, nome: 'back-end'},
    {id: 3, nome: 'devops'},
    {id: 4, nome: 'inteligência artificial'},
    {id: 5, nome: 'data science'},
    {id: 6, nome: 'cloud'}
  ];

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]);

  /**
   * Adicionar um novo evento.
   * 
   * @param {Array<{capa: string, tema: {id: number, nome: string}, data: Date, titulo: string}>} evento
   */
  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo da empresa" />
      </header>

      <Banner />

      <FormularioDeEvento temas={temas} adicionarEvento={adicionarEvento} />

      <section className="container">
        {temas.map(function (tema, index) {
          // Filtrar o array de eventos para verificar se existe algum evento do tema atual.
          const existeEventoNoTema = eventos.some(function (evento, index) {
            return evento.tema.id == tema.id;
          });

          if (!existeEventoNoTema) return null;

          return (
            <section key={index}>
              <Tema tema={tema} />

              <div className="eventos">
                {eventos
                  .filter((evento, index) => (
                    evento.tema.id == tema.id
                  ))
                  .map((evento, index) => (
                    <CardEvento key={index} evento={evento} />
                  ))
                }
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App
