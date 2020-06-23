import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ItemForm extends Component {
  state = {grocery: '', price: '', aisle: ''}

  componentDidMount() {
    if (this.props.id) {
      const { grocery, price, aisle } = this.props
      this.setState({ grocery, price, aisle  })
    }
  }

  handleChange = (g) => {
    const { name, value } = g.target
    this.setState({ [name]: value })
    // this.setState({ grocery: 'value' })
    // this.setState({ price: 'value' })
    // this.setState({ aisle: 'value' })
    }

  handleSubmit = (g) => {
    g.preventDefault();
    if (this.props.id) {
      this.props.updateItem( this.props.id, this.state)
    } else {
      // add the object to the array
      this.props.addItem(this.state)
    }
    // clear out the form
    this.setState({ grocery: '', price: '', aisle: '' })
    }

  render() {
    const { grocery, price, aisle } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='grocery'
          value={grocery}
          onChange={this.handleChange}
          label='Item'
          required 
        />
        <Form.Input
          name='price'
          value={price}
          onChange={this.handleChange}
          label='Price'
          required 
        />
        <Form.Input
          name='aisle'
          value={aisle}
          onChange={this.handleChange}
          label='Aisle'
          required 
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ItemForm;