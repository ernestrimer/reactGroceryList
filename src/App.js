import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import List from './components/groceries/List';

class App extends Component {
  state = { groceries: [
    {id: 1, grocery: "Toilet paper", price: "20.00", aisle: "5"},
    {id: 2, grocery: "Jabon de manos", price: "50.00", aisle: "10"},
    {id: 3, grocery: "Flour", price: "15.00", aisle: "2"},
    {id: 4, grocery: "Beef", price: "35.00", aisle: "7"},
  ]}
  render() {
    const { groceries } = this.state
    return(
      <div>
        <Header size='huge' color="red" align="center">
          Grocery List
        </Header>
        <ul>
        <List title='Items to Hoard' groceries={groceries} />
        </ul>
      </div>
    )
  }
}

export default App;
