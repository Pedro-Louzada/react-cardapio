import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/Pagina Padrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Cardapio/Inicio';
import Sobre from 'pages/Cardapio/Sobre';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //renomiamos o BrowserRouter com o "as" e damos o nome dele para Router

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}