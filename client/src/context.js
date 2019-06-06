import React, { useReducer, Component } from 'react';
import API from './utils/API';

// import React, { Component } from 'react'

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    product_list: []
  };
componentDidMount() {
  this.loadProduces();
}

loadProduces = () => {
  API.getPosts()
      .then(res =>
          this.setState({ produce: res.data, item: "", description: "", 
              price: "", quantity: ""})
              )
              .catch(err => console.log(err));
};
  render() {
    return (
      <ProductContext.Provider 
      value={{
        ...this.state,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, currentUser: state.currentUser };
    default:
      return;
  }
};

const initialState = { currentUser: { email: 'Leo@foodnome.com' } };

const CounterContext = React.createContext(initialState);

function CounterProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider, ProductProvider, ProductConsumer };
// export { ProductProvider, ProductConsumer};
