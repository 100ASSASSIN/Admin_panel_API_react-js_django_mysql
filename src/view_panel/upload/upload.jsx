const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('file', file);

    // Add filename to form data
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
};
