import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const[nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <div className="container">
        <input className="campoUsuario" type="text" placeholder="Digite o usuario do Github" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </div>

      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toogle form</button> */}
    </>
  )
}

export default App