import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import Servicii from './pages/Servicii';
import Documente from './pages/Documente';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='servicii' element={<Servicii></Servicii>}></Route>
            <Route path='documente' element={<Documente></Documente>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
