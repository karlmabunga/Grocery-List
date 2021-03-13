import React from 'react';
import ListEntry from './ListEntry.jsx';

export default function List({groceries, deleteGrocery}) {
  return (
    <div>
      <ul className="groceries">
        {groceries.map((item, index) => (
          <ListEntry item={item.item} quantity={item.quantity} key={index} index={index} deleteGrocery={deleteGrocery} />
        ))}
      </ul>
    </div>
  )
};