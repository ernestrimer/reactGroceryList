import React from 'react';
import { Checkbox, Table } from 'semantic-ui-react';
// Import ItemForm from './ItemForm';

const Item = ({ id, grocery, price, aisle}) => (
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>{grocery}</Table.Cell>
        <Table.Cell>{price}</Table.Cell>
        <Table.Cell>{aisle}</Table.Cell>
      </Table.Row>
)

export default Item;