Import React from 'react';
import { Table } from 'semantic-ui-react';
Import ItemForm from './ItemForm';
const Groceries = ({ id, grocery, price, aisle, deleteItem, updateItem}) => (
  <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='1'>Item</Table.HeaderCell>
        <Table.HeaderCell rowSpan='1'>Price</Table.HeaderCell>
        <Table.HeaderCell rowSpan='1'>Aisle</Table.HeaderCell>
        <Table.HeaderCell rowSpan='1'>Hoarded It</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Alpha Team</Table.Cell>
        <Table.Cell>Project 1</Table.Cell>
        <Table.Cell textAlign='right'>2</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
        <Table.Cell>Project 1</Table.Cell>
        <Table.Cell textAlign='right'>52</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project 2</Table.Cell>
        <Table.Cell textAlign='right'>12</Table.Cell>
        <Table.Cell />
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project 3</Table.Cell>
        <Table.Cell textAlign='right'>21</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
    </Table.Body>
  </Table>
)

