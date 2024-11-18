import './style.css';
import Incomplete from './assets/uncomplet.png'
import Complete from './assets/complet.png'
import PropTypes from 'prop-types';

function DetalleActividad(props) {
  const { id, nombre, descripcion, fecha, estado } = props.itemData;
    return(<div className="actividad-crear">
        <h2>Detalle de la actividad</h2>
        <div>
          <p>{props.itemData.nombre}</p>
          <p>{props.itemData.descripcion}</p>
          <p>{props.itemData.fecha}</p>
          <div style={{display:'flex', width:20, height:20, margin:5}}>
                <img src={props.itemData.estado ? Complete : Incomplete} className='imgStyle' />
            </div>
          <button onClick={()=>{
           const newData = {id, nombre, descripcion, fecha, estado: !estado };
            props.changeActivity(newData)}}
            style={{ marginLeft: '10px', backgroundColor: '#7dcea0', color: 'white', padding: '5px',  borderRadius: '5px' }} >Cambiar</button>
          <button onClick={() => {
            props.deleteActivity(id)}}
          style={{ marginLeft: '10px', backgroundColor: '#d55442 ', color: 'white', padding: '5px',  borderRadius: '5px' }}  >Eliminar</button>
        </div>
      </div>);
}

DetalleActividad.propTypes= {
  changeActivity: PropTypes.func.isRequired,
  deleteActivity: PropTypes.func.isRequired,
  itemData: PropTypes.object.isRequired,
};

export default DetalleActividad;