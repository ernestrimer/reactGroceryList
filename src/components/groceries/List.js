import React from 'react';
import Item from './Item';
import { Table } from 'semantic-ui-react';

const List = ({groceries}) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Hoarded</Table.HeaderCell>
        <Table.HeaderCell>Item</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Aisle</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      { groceries.map( g => <Item key={g.id} {...g}/>)}
    </Table.Body>
  </Table>
)

export default List;

//This worked before...
// const List = ({ title, groceries}) => (
//   <div>
//     <h2>{title}</h2>
//     { groceries.map( g => <li key={g.id}>{g.grocery} (${g.price}), Aisle: {g.aisle}</li>
//     )}
//   </div>
// )