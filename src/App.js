import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import HomeRoute from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="whole-container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
