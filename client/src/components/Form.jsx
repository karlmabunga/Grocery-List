import React, { useState } from 'react';


export default function Form ({addItem}) {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    addItem({
      item,
      quantity,
    });
  };


  return (
    <form onSubmit={(e) => {handleSubmit(e); setItem(''); setQuantity('')}}>
      <input placeholder='Item' value={item} onChange={(e) => setItem(e.target.value)}></input>
      <input placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
      <button >Submit</button>
    </form>
  )
};
