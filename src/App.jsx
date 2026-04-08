import './App.css'
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

  const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo da empresa" />
      </header>

      <Banner />

      <FormularioDeEvento />

      {temas.map((tema, index) => (
        <section key={index}>
          <Tema tema={tema} />
          <CardEvento evento={eventos[0]} />
        </section>
      ))}
    </main>
  )
}

export default App
