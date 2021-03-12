import React from 'react';

export default function ListEntry({item, quantity}) {

  return (
    <div>
      <li>{item} {quantity}</li>
    </div>
  )
}