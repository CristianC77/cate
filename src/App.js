import React, { useState } from 'react';
// import logo from './assets/logo.svg';
import './styles/App.css';
import ConsultarCate from './components/Categoria/ConsultarCate';
import IngresarCate from './components/Categoria/IngresarCate';
import ActualizarCate from './components/Categoria/ActualizarCate';
import EliminarCate from './components/Categoria/EliminarCate';


function App() {
    const [dataUpdated, setDataUpdated] = useState(false);

    const handleDataUpdate = () => {
        setDataUpdated(true);
    };

    return (
        <div className="App">
            <div class="container">
                <div class="row">
                    <div class="div">
                        <table>
                            <IngresarCate onDataUpdate={handleDataUpdate} />
                        </table> 
                    </div>
                    <div class="div">
                        <table>
                            <ConsultarCate dataUpdated={dataUpdated} />
                        </table> 
                    </div>
                    <div class="div">
                        <table>
                            <ActualizarCate dataUpdated={handleDataUpdate} />
                        </table>         
                    </div>
                    <div class="div">
                        <table>
                            <EliminarCate onDataUpdate={handleDataUpdate}/>
                        </table> 
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default App;
