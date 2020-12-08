import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Doctors from '../pages/Doctors/index';
import registerDoctor from '../pages/registerDoctor/index';

import NavBar from '../components/NavBar/index';

const Routers = () => {
  return (
    <BrowserRouter>

      <NavBar listMenu={[{
        title: 'Inicio',
        ref: ''
      }, {
        title: 'Doutores',
        ref: 'doctors'
      }]} />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/doctors" exact={true} component={Doctors} />
        <Route path="/registerDoctor" exact={true} component={registerDoctor} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routers;