import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';


export default class Product extends Component {
    render() {
        const {item, description, price, quantity} = this.props.productItem;
        return (
            <div>
                <h3>hello from product</h3>
            </div>
        );
    }
}