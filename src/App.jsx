import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.css';
import './styles/estilos.css';
import './styles/estilosGestorVentas.css';

import Admin from './pages/admin/Index';
import Index from './pages/Index';
import Login from './pages/Login';
import Registro from './pages/Registro';
import PublicLayout from './layouts/PublicLayout';
import 'bootstrap/dist/css/bootstrap.css';
import PrivateLayout from './layouts/PrivateLayout';
import AuthLayout from './layouts/AuthLayout';
import Productos from './pages/admin/Productos';
import Clientes from './pages/admin/Clientes';
import Menu from './pages/menu.jsx';
import IngresarVenta from './pages/ingresarVenta.jsx';
import MaestroVentas from './pages/maestroVentas.jsx';
import GestionUsuario from './pages/gestionUsuario.jsx';
import MaestroProductos from './pages/maestroProductos.jsx';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin', '/maestroProductos', '/ingresarVenta', '/maestroVentas', '/gestionUsuario', '/admin/Productos', '/admin/clientes']}>
          <PrivateLayout>
            <Switch>
              <Route path='/maestroProductos'>
                <MaestroProductos />
              </Route>
              <Route path='/ingresarVenta'>
                <IngresarVenta />
              </Route>
              <Route path='/maestroVentas'>
                <MaestroVentas />
              </Route>
              <Route path='/gestionUsuario'>
                <GestionUsuario />
              </Route>
              <Route path='/admin/Productos'>
                <Productos/>
              </Route>
              <Route path='/admin/clientes'>
                <Clientes/>
              </Route>
              <Route path='/admin'>
                <Admin/>
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/login', '/registro', '/menu']}>
          <AuthLayout>
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/registro'>
                <Registro/>
              </Route>
              <Route path='/menu'>
                <Menu />
              </Route>
              
            </Switch>
          </AuthLayout>
        </Route>
        <Route path={['/']}>
          <PublicLayout>
            <Switch>
              
              <Route path='/'>
                <Index/>
              </Route>
              
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>     
    </Router>
  );
    
}

export default App;

  