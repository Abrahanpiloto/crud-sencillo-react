
import { useState, useEffect } from 'react';

const initialForm = {
  nombre:"",
  lenguaje:"",
  id: null
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if(dataToEdit) {
      setForm(dataToEdit)
    } else {
      setForm(initialForm)
    }
  }, [dataToEdit]);
  
 
  const handleChange = (e) => {
    console.log(e.target)
    setForm({
      ...form, 
      [e.target.name]: e.target.value,
     
    })
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    if(!form.nombre || !form.lenguaje) {
      alert("Todos los campos son obligatorios")
      return;
    }
    if(form.id === null) {
      
      createData(form)
    } else {
      updateData(form)
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='nombre' 
          placeholder='Nombre' 
          onChange={handleChange}
          value={form.nombre}
        />
        <input 
          type='text' 
          name='lenguaje' 
          placeholder='Lenguaje' 
          onChange={handleChange} 
          value={form.lenguaje}
        />
        <input 
          type='submit' 
          value='Enviar' 
          // onClick={handleSubmit}
        />
        <input 
          type='reset' 
          value='Limpiar' 
          onClick={handleReset}
        />
      </form>
    </div>
  )
}

export default CrudForm;