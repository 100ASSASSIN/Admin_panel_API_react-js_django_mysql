import React, { useState } from 'react';

function DeleteItem() {
  const [itemId, setItemId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    fetch(`http://localhost:8000/api/api/delete_item/${itemId}/`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setMessage('Item deleted successfully');
          setItemId(''); // Clear input after successful deletion
        } else {
          setMessage('Failed to delete item');
        }
      })
      .catch(error => {
        console.error('Error deleting item:', error);
        setMessage('Failed to delete item');
      });
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <input
        type="number"
        placeholder="Enter item ID"
        value={itemId}
        onChange={e => setItemId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteItem;
