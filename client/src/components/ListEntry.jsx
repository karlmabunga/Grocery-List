import React, { useState } from 'react';

export default function ListEntry({item, quantity, index, deleteGrocery}) {

  const [ isEditing, setIsEditing ] = useState(true);
  const [ id, setId ] = useState(index);


  return (
    <div>
      <li>{item} {quantity}</li>
      {isEditing ? <button onClick={() => { deleteGrocery(id)}}>Delete</button> : null}
    </div>
  )
}