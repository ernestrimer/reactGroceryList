import React from 'react';
import { Button, Checkbox, Table } from 'semantic-ui-react';
import ItemForm from './ItemForm';

const Item = ({ id, grocery, price, aisle, deleteItem, updateItem}) => (
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>{grocery}</Table.Cell>
        <Table.Cell>${price}</Table.Cell>
        <Table.Cell>{aisle}</Table.Cell>
        <Table.Cell>
          <Button color='red' onClick={ () => deleteItem(id) }>
            Delete
          </Button>
          <ItemForm
          updateItem={updateItem}
          id={id}
          grocery={grocery}
          price={price}
          aisle={aisle}
          />
        </Table.Cell>
      </Table.Row>
)

export default Item;