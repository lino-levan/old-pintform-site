import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import './styling/App.css'

import Index from './pages/index'
import Pricing from './pages/pricing'
import Demo from './pages/demo'
import Solutions from './pages/solutions'
import Construction from './pages/construction'

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/"><Index/></Route>
            <Route exact path="/pricing"><Pricing/></Route>
            <Route exact path="/demo"><Demo/></Route>
            <Route exact path="/solutions"><Solutions/></Route>
            <Route exact path="/construction"><Construction/></Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
