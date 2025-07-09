
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Cadastrar from './components/pages/Cadastrar';
import Pratos from './components/pages/Pratos';
import Usuario from './components/pages/Usuario';
import { useCookies } from 'react-cookie';

function App() {

  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setCookie={setCookie}/>}/>
          <Route path="/cadastrar" element={<Cadastrar setCookie={setCookie}/>}/>
          <Route path="/home" element={<Home cookies={cookies} removeCookie={removeCookie}/>}/>
          <Route path="/pratos" element={<Pratos cookies={cookies} removeCookie={removeCookie}/>}/>
          <Route path="/usuario" element={<Usuario/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
