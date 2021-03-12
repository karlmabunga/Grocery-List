import React from 'react';
import ListEntry from './ListEntry.jsx';

export default function List(props) {
  return (
    <div>
      <ul className="groceries">
        {props.groceries.map((item) => (
          <ListEntry item={item.item} quantity={item.quantity} />
        ))}
      </ul>
    </div>
  )
}