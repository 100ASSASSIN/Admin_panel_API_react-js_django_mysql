import React, { useState } from 'react';
import '../icons/tab.css';

const navigate = () => {
    window.location.replace("/new");
}

function UploadPage() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState(''); // Step 1: State for ID

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleIdChange = (event) => { // Step 2: Handler function for ID change
        setId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('file', file);
        formData.append('id', id); // Step 4: Append ID to FormData

        // Add filename to form data
        if (file) {
            formData.append('filename', file.name);

            // Read the content of the file and convert it to base64
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64data = reader.result.split(',')[1];
                formData.append('image_data', base64data);

                // Send the form data to the server
                fetch('http://127.0.0.1:8000/api/ben/', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (response.ok) {
                        alert('Product uploaded successfully!');
                        // Clear form fields after successful upload
                        setName('');
                        setPrice('');
                        setFile(null);
                        setId(''); // Reset ID field
                    } else {
                        return response.json().then(errorData => {
                            throw new Error(errorData.detail);
                        });
                    }
                })
                .catch(error => {
                    alert('Error: ' + error.message);
                });
            };
        }
    };

    return (
        <div>
            <button id="ut2" type="submit" style={buttonStyle1} onClick={() => navigate(-1)}>
                Go Back
            </button>
            <div id="Uploade" style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <form onSubmit={handleSubmit} className="upload-form">
    <div className="form-group">
        <label htmlFor="idInput" className="form-label">ID:</label>
        <input
            type="text"
            id="idInput"
            value={id} // Step 3: Bind value to ID state
            onChange={handleIdChange} // Step 3: Handle change event
            required // Step 5: Make input required if necessary
            className="form-control"
        />
    </div>
    <div className="form-group">
        <label htmlFor="nameInput" className="form-label">Name:</label>
        <input
            type="text"
            id="nameInput"
            value={name}
            onChange={handleNameChange}
            required
            className="form-control"
        />
    </div>
    <div className="form-group">
        <label htmlFor="priceInput" className="form-label">Price:</label>
        <input
            type="number"
            id="priceInput"
            value={price}
            onChange={handlePriceChange}
            required
            className="form-control"
        />
    </div>
    <div className="form-group">
    <label htmlFor="fileInput" className="file-label">
    <span className="button-text">Choose File</span>
    <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        required
        className="file-input"
    />
</label>
    </div>
    <button type="submit" className="upload-button">Upload</button>
</form>

            </div>
        </div>
    );
}

const buttonStyle1 = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '10px', // Add margin to separate from upload section
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
};

const uploadButtonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    background: '#007bff',
    color: '#fff',
    cursor: 'pointer',
};

export default UploadPage;
