import React, { useState } from 'react';

function UploadPage() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('file', file);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/upload/', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Product uploaded successfully!');
                // Clear form fields after successful upload
                setName('');
                setPrice('');
                setFile(null);
            } else {
                const errorData = await response.json();
                alert('Error: ' + errorData.detail);
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Upload Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={handlePriceChange} required />
                </div>
                <div>
                    <label>File:</label>
                    <input type="file" onChange={handleFileChange} required />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default UploadPage;
