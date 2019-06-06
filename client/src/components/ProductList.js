import React, { Component } from 'react';
import API from '../utils/API'
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    state =   {
        item: "Bananas",
        description: "organic",
        price: 2,
        quantity: 10
      }
    componentDidMount() {
        this.loadProduces();
    }

    loadProduces = () => {
        API.getPosts()
            .then(res =>
                this.setState({ produces: res.data, item: "", description: "", 
                    price: "", quantity: ""})
                    )
                    .catch(err => console.log(err));
    };
    render() {
        console.log(this.state);
        
        return (
            <React.Fragment>
            <div className="py0-5">
            <div className="container">
                <Title name="Market" title="Produce" />
            <div className="row">
            <ProductConsumer>
                {value => {
                    console.log(value);
                    return <h1>Produces</h1>;
                }}
            </ProductConsumer>
            </div>
            </div>
            </div>
            </React.Fragment>
            
        )
    }
}
