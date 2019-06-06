import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import DeleteBtn from '../components/DeleteBtn';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';
import API from '../utils/API';

class Produces extends Component {
  // Initialize this.state.books as an empty array
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
    API.getPosts().then(res => this.setState({ produces: res.data }));
  }

  deletePost(id) {
    API.deletePost(id).then(res =>
      this.setState({ produces: this.state.produces.filter(b => b._id !== id) })
    );
  }

  savePost() {
    API.savePost({
      item: this.state.item,
      description: this.state.description,
      price: this.state.price,
      quantity: this.state.quantity,
  }).then(produce =>
      this.setState({
        item: '',
        description: '',
        price: '',
        quantity: '',
        produces: [produce.data, ...this.state.produces],
      })
    );
  }

  onChangeItem(e) {
    this.setState({ item: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangePrice(e) {
    this.setState({ price: e.target.value });
  }
  onChangeQuantity(e) {
    this.setState({ quantity: e.target.value });
  }


  render() {
    console.log(this.state.data);
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Items</h1>
            </Jumbotron>
            <div>
              <Input
                value={this.state.item}
                name="item"
                placeholder="Item (required)"
                onChange={e => this.onChangeItem(e)}
              />
              <Input
                value={this.state.description}
                name="description"
                placeholder="Description (required)"
                onChange={e => this.onChangeDescription(e)}
              />
                <Input
                value={this.state.price}
                name="price"
                placeholder="Price (required)"
                onChange={e => this.onChangePrice(e)}
              />
                <Input
                value={this.state.quantity}
                name="quantity"
                placeholder="Quantity (required)"
                onChange={e => this.onChangeQuantity(e)}
              />
              {/* <TextArea
                name="price"
                value={this.state.price}
                placeholder="Price (Optional)"
                onChange={e => this.onChangePrice(e)}
              /> */}
              <FormBtn onClick={() => this.savePost()}>Submit Produce</FormBtn>
            </div>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>For Sale</h1>
            </Jumbotron>
            {this.state.produces.length ? (
              <List>
                {this.state.produces.map(produce => (
                  <ListItem key={produce._id}>
                    <a href={'/produces/' + produce._id}>
                      <strong>
                        {produce.item}
                        {produce.description}
                        {produce.price} 
                        {produce.quantity}

                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deletePost(produce._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Produces;