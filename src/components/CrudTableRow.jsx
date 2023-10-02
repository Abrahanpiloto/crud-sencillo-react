import React from 'react'

const CrudTableRow = ({element, setDataToEdit, deleteData}) => {
  
  const {nombre, lenguaje, id} = element;
  return (
   
      <tr>
        <td>{nombre}</td>
        <td>{lenguaje}</td>
        <td>
          <button 
            onClick={() => setDataToEdit(element)}>Editar
          </button>
          
          <button 
            onClick={() => deleteData(id)}>Eliminar 
          </button>
        </td>
      </tr>
   
  )
  
}

export default CrudTableRow;