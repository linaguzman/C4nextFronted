import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import './styles/globals.css';
import './styles/tabla.css';

import PrivateLayout from './layouts/PrivateLayout';
import Index from './pages/Index';
import Page2 from './pages/Page2';
import IndexCategory1 from './pages/category1/Index';
import Category1 from './pages/category1/CategoryPage1';
import IndexUsuarios from './pages/usuarios';
import EditarUsuario from './pages/usuarios/editar';
import AuthLayout from './layouts/AuthLayout';
import Register from './pages/auth/register.jsx';
import Login from './pages/auth/login';
//import { AuthContext } from 'context/authContext';
import IndexProyectos from './pages/proyectos/Index';
//import jwt_decode from 'jwt-decode';
import NuevoProyecto from './pages/proyectos/NuevoProyecto';
import IndexInscripciones from './pages/inscripciones';
import Profile from './pages/profile';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<PrivateLayout />}>
                <Route path='' element={<Index />} />
                <Route path='./usuarios' element={<IndexUsuarios />} />
                <Route
                  path='/usuarios/editar/:_id'
                  element={<EditarUsuario />}
                />
                <Route path='./pages/proyectos' element={<IndexProyectos />} />
                <Route path='./pages/proyectos/nuevo' element={<NuevoProyecto />} />
                <Route path='./pages/inscripciones' element={<IndexInscripciones />} />
                <Route path='./pages/profile' element={<Profile />} />
                <Route path='./pages/page2' element={<Page2 />} />
                <Route path='./pages/category1' element={<IndexCategory1 />} />
                <Route path='./pages/category1/page1' element={<Category1 />} />
              </Route>
              <Route path='./auth' element={<AuthLayout />}>
                <Route path='./register' element={<Register />} />
                <Route path='./login' element={<Login />} />
              </Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;