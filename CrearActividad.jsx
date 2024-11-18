import { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';

function CrearActividad(props) {
  const [title, setTitle] = useState();
  const [activity, setActivity] = useState();
  const [dateAct, setDateAct] = useState();

    return(<div className="actividad-crear">
        <div>
          <label htmlFor="title">Titulo: </label>
          <input id='title' type="text" placeholder="Título de la actividad"
          value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="activity">Actividad: </label>
          <input id="activity" type="text" placeholder="Añade una descripción" 
          value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="date" >Fecha: </label>
          <input id="date" type="date" value={dateAct} onChange={(e)=>{setDateAct(e.target.value)}} />
        </div>
        <br/>
        <button onClick={() => {
          let nuevo = {"id":props.dato.length + 1, "nombre":title,
             "descripcion":activity, "estado":false, "fecha":dateAct};
          const nuevasActividades = [...props.dato, nuevo];
          props.agregar(nuevasActividades);
        }} style={{padding: '5px', backgroundColor: '#979a9a ', color: 'white', borderRadius: '5px'}}>Agregar</button>
      </div>);
}

CrearActividad.propTypes = {
  dato: PropTypes.array.isRequired,
  agregar: PropTypes.func.isRequired,
};

export default CrearActividad;