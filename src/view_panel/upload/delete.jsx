import React, { useState } from 'react';
import '../upload/del.css'; // Import CSS file for styling
import '../icons/tab.css';
const navigate = () => {
    window.location.replace("/new");
}

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
    
    <div id="del2">
    <div className="delete-item-container">
     
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter item ID"
          value={itemId}
          onChange={e => setItemId(e.target.value)}
        />
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
      {message && <p className="message">{message}</p>}
      <p className="warning">Please ensure the correctness of the item ID before deleting. This action cannot be undone.</p>
    </div>
    <div id='back'>
    <button type="submit" style={buttonStyle} onClick={() => navigate(-1)}>
                Go Back
            </button></div>
    </div>
  );
}

const buttonStyle = {
    padding: '10px 30px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default DeleteItem;
