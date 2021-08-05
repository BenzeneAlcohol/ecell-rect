
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import SignIn from './components/pages/Signin';
import Signup from './components/pages/Signup'
import Intership from './components/interships/Intership'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/signin' exact component={SignIn}/>
        <Route path='/internship' exact component={Intership}/>
      </Switch>
    </Router>
  );
}

export default App;
