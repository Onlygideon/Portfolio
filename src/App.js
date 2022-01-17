import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import Frontend from './components/Projects/Frontend'
import Backend from './components/Projects/Backend'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Design from './components/Projects/Design';




const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            < Home />
            < About />
            < Skills />
            < Experience />
            < Projects />
            <Contact />
          </Route>

          <Route exact path="/frontend-projects">
            <Frontend />
          </Route>
          
          <Route exact path="/backend-projects">
            <Backend />
          </Route>

          <Route exact path="/design-projects">
            <Design />
          </Route>

        </Switch>
      </Router> 
    </div>
  );
}

export default App;
