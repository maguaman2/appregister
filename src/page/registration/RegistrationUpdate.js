import React from "react";
  
import { MainContext } from "../../context/MainContext";

function RegistrationUpdate ({registrationId}){
  const { setOpenModal,setUpdating } = React.useContext(MainContext);

  const onClick = () => {
    setOpenModal(false)
    setUpdating(false)

  }

    return (
      <div>
      <h1>Pagina ACTUALIZAR id {registrationId}</h1>
      <button onClick={onClick}>Cerrar</button>
      </div>
    );
}

export default RegistrationUpdate