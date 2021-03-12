import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import List from './List.jsx';

const list = [{item: 'pizza', quantity: 2}, {item: 'ice cream', quantity: 2}, {item: 'soda', quantity: 2}, {item: 'coffee', quantity: 5}, {item: 'burritos', quantity: 2}];

export default function App () {

  const [groceries, setGroceries] = useState(list);
  return (
    <div>
      <Header />
      <Form />
      <List groceries={groceries}/>
    </div>
  )
};

const handleFormInput = () => {
  const [value, setValue] = useState();
  function handleChange(e) {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};