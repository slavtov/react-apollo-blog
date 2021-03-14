import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Post from './pages/Post'
import User from './pages/User'
import Users from './pages/Users'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Container className="my-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/users/:id" component={User} />
          <Route path="/users" component={Users} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
