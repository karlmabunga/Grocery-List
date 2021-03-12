import React from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';

const list = [{item: 'pizza', quantity: 2}, {item: 'ice cream', quantity: 2}, {item: 'soda', quantity: 2}, {item: 'coffee', quantity: 5}, {item: 'burritos', quantity: 2}];

export default function App () {
  return (
    <div>
      <Header />
      <Form />
    </div>
  )
};