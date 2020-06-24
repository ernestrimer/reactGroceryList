//Every JS Page
import React, { Component } from 'react';

//Imports
import { Header, Container, Grid } from 'semantic-ui-react';
import List from './components/groceries/List';
import ItemForm from './components/groceries/ItemForm';

//State
class App extends Component {
  state = { groceries: [
    {id: 1, grocery: "Toilet paper", price: "20.00", aisle: "5"},
    {id: 2, grocery: "Jabon de manos", price: "50.00", aisle: "10"},
    {id: 3, grocery: "Flour", price: "15.00", aisle: "2"},
    {id: 4, grocery: "Beef", price: "35.00", aisle: "7"},
  ]}

  //Functions
  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = (incomingItem) => {
    const { groceries } = this.state
    let newItem = { id: this.getId(), ...incomingItem }
    this.setState({ groceries: [newItem, ...groceries] })
  }

  deleteItem = (id) => {
    const groceries = this.state.groceries.filter( item => {
      if (item.id !== id) {
        return item 
      } 
    })
    this.setState({ groceries})
  }

  updateItem = (id, updatedItem) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( g => {
        if (g.id === id) {
          return {...updatedItem }
        }
        return g
      })
    })
  }
  //JSX/HTML
  render() {
    //Deconstruction
    const { groceries } = this.state
    return(
      <Container>
      <div>
        <br/>
        <Header size='huge' color="red" align="center" block>
          Grocery List
        </Header>
        <List
          groceries={groceries}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        />
        <br/>
        <h3>Add Item to List</h3>
        <ItemForm addItem={this.addItem} />
      </div>
      </Container>
    )
  }
}

export default App;