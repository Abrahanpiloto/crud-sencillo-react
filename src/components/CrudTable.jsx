import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Lenguaje</th>
            <th>Acciones</th>
          </tr>
        </thead>
        
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map(
              (element) => 
              <CrudTableRow 
                key={element.id} 
                element={element}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />)
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable;