import React, {useState} from "react";

const Buscador = () => {
    const [text, setText] = useState ("");
    const [search, setSearch] = useState ([]);
    const [task, setTask] = useState ([]); 
    

    const handleText = (event) => {
       setText (event.target.value);
    }
    const buscarTarea =() => {
       const newSearch= (text)
       setSearch ([...search, newSearch])
         }
 
       return (
		<div className="col-12">
	     <div className="mb-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">T A R E A S </label>
            <input type="text" className="form-control" id="textinput" 
            placeholder="Detalle de las tareas" onChange={handleText} />
            <button className="btn btn-success" onClick={buscarTarea}>Agregar</button>
         </div>
         {search  ? <p> Tarea pendiente: 
                        <ul>
                           {search.map ((value, index) => (
                          <li key={index}>
                           {value}
                           <button className="delete"onClick={ 
                              () => {
                               let Test = search.filter((TaskDone) =>{ 
                                 return TaskDone != value;
                                } )
                                setSearch(Test)
                                 console.log(Test);
                              }
                           }>
                              
                           </button>
                          </li>
                           ))}
                        </ul>
                    </p>: ""}
                   <label> {search.length}</label>
		</div>

	);
}
    
export default Buscador; 