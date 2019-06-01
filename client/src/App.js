import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import ProductList from './components/ProductList';


import { CounterProvider } from './context';
const initialState = { currentUser: {} };
const UserContext = React.createContext(initialState);

function App() {
  return (
    <Router>
      <CounterProvider>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/productList" component={ProductList} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </CounterProvider>
    </Router>
  );
}

export default App;
