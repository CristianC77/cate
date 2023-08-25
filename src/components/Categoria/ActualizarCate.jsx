import React, { useState } from 'react';

function ActualizarCate({ onDataUpdate }) {
    const [id_categoria, setid_categoria] = useState('');
    const [tipo_categoria, settipo_categoria] = useState('');

    const [message, setMessage] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();

        const categoria = {
            id_categoria,
            tipo_categoria,
        };

        fetch('http://localhost/api_php/api.php?apicall=updatecategoria', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoria),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al actualizar la categoría');
                } else {
                    setMessage('Categoría actualizada correctamente');
                    onDataUpdate();
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="ingresar-container">
            <h2>Actualizar categoría</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="id_categoria">Id de la categoría:</label>
                    <input
                        type="text"
                        id="id_categoria"
                        value={id_categoria}
                        onChange={e => setid_categoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tipo_categoria">Tipo de categoría:</label>
                    <input
                        type="text"
                        id="tipo_categoria"
                        value={tipo_categoria}
                        onChange={e => settipo_categoria(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Actualizar categoría</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ActualizarCate;