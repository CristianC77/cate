import React, { useEffect, useState } from 'react';

function ConsultarCate({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    const fetchData = () => {
        fetch('http://localhost/api_php/api.php?apicall=readcategoria')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="consultar-container">
            <h2>Categorias</h2>
            <table>
                <thead>
                    <tr>
                    <th>No categoria</th>
                    <th>Nombre de la categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) ? (
                    data.map(item => (
                        <tr key={item.id_categoria}>
                        <td>{item.id_categoria}</td>
                        <td>{item.tipo_categoria}</td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="2">No hay datos disponibles</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );


    
}

export default ConsultarCate;