import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import CreateActivity from './components/CreateActivity';
import Detail from './components/Detail';

function App() {
  return (
  <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/activities" component={CreateActivity} />
        <Route exact path="/home/:id" component={Detail} />
      </Switch>
    </div>
  </BrowserRouter> 
  );
}

export default App;
