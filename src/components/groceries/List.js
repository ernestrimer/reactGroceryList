import React from 'react';
const List = ({ title, groceries}) => (
  <div>
    <h2>{title}</h2>
    { groceries.map( g => <li key={g.id}>{g.grocery} (${g.price}), Aisle: {g.aisle}</li>
    )}
  </div>
)
export default List;