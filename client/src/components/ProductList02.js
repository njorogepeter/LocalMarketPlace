import React, { Component } from 'react';
// import API from '../utils/API'
import Title from './Title';
import Produce from './ProductItem';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    state =   {
        produces: [],
        // item: '',
        // description: '',
        // price: '',
        // quantity: '',
    };
    // componentDidMount() {
    //     this.getAllProduces();
    // }

    // getAllProduces() {
    //     API.getPosts().then(res => this.setState({ produces: res.data }));
    // }

    // deletePost(id) {
    //     API.deletePost(id).then(res =>
    //         this.setState({ produces: this.state.produces.filter(b => b._id !== id) })
    //     );
    // }
    
    render() {
        
        return (
            <React.Fragment>
            <div className="py0-5">
            <div className="container">
                <Title name="Market" title="Produce" />
            <div className="row">
            <ProductConsumer>
                {value => {
                    return value.produces.map( produce =>{
                        return <Produce key={produce._id} produce={produce}/>
                    });
                    // console.log(value);
                }}
            </ProductConsumer>
            </div>
            </div>
            </div>
            </React.Fragment>
            
        )
    }
}
