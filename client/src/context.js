import React, { useReducer, Component } from 'react';
import API from './utils/API';

// import React, { Component } from 'react'

const ProductContext = React.createContext({
  produces: []
});

class ProductProvider extends Component {
  state = {
    produces: [],
    item: '',
    description: '',
    price: '',
    quantity: '',

  };
  componentDidMount() {
    this.getAllProduces();
}

getAllProduces() {
    API.getPosts()
      .then(res => this.setState({ produces: res.data, item: '',
      description: '', price: '', quantity: '', }));
}

deletePost(id) {
    API.deletePost(id).then(res =>
        this.setState({ produces: this.state.produces.filter(b => b._id !== id) })
    );
}
  render() {
    return (
      <ProductContext.Provider 
      value={{
        ...this.state,
        addToCart:this.addToCart
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
