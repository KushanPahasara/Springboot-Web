import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      quantity: '',
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  saveItem(e) {
    e.preventDefault();
    let item = {
      Name: this.state.name,
      Price: this.state.price,
      Quantity: this.state.quantity,
    };
    console.log('item => ' + JSON.stringify(item));

    this.setState({
      name: '',
      price: '',
      quantity: '',
    });
  }

  changeNameHandler(event) {
    this.setState({ name: event.target.value }); // Use event.target.value, not EventTarget.value
  }

  changePriceHandler(event) {
    this.setState({ price: event.target.value }); // Use event.target.value, not EventTarget.value
  }

  changeQuantityHandler(event) {
    this.setState({ quantity: event.target.value }); // Use event.target.value, not EventTarget.value
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Item</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                      placeholder="Add Name"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      value={this.state.price}
                      onChange={this.changePriceHandler}
                      placeholder="Add Price"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      value={this.state.quantity}
                      onChange={this.changeQuantityHandler}
                      placeholder="Add Quantity"
                    />
                  </div>
                  <br />
                  <button className="btn btn-success" onClick={this.saveItem}>
                    Submit
                  </button>
                  <Link to="/" className="btn btn-danger" style={{marginLeft:'10px'}}>Cancel</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
