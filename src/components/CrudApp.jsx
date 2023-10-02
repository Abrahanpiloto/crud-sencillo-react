import React from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { useState } from 'react'

const initialDb = [
  { id: 1, nombre: "React", lenguaje: "JavaScript" },
  { id: 2, nombre: "Angular", lenguaje: "TypeScript" },
  { id: 3, nombre: "Vue.js", lenguaje: "JavaScript" },
  { id: 4, nombre: "Ember.js", lenguaje: "JavaScript" },
  { id: 5, nombre: "Svelte", lenguaje: "JavaScript" }
];

const CrudApp = () => {

  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data])
    console.log(data)
  };
 

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el)
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("¿Estas seguro que deseas eliminar este registro?");
    if(isDelete) {
      let newData = db.filter(element => element.id !== id);
      setDb(newData)
    } else {
      return;
    }
  };
  
  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm 
        createData={createData} 
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />

      <CrudTable 
        data={db}
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData}
      />
    </div>
  )
}

export default CrudApp