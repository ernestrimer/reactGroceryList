import React from 'react';
import Item from './Item';
import { Table } from 'semantic-ui-react';

const List = ({groceries, deleteItem, updateItem}) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Hoarded <p>(yes-no)</p></Table.HeaderCell>
        <Table.HeaderCell>Item</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Aisle</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      { groceries.map( g => (
        <Item key={g.id} {...g}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
        ))
      }
    </Table.Body>
  </Table>
)

export default List;