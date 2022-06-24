import React from "react";
  
import { MainContext } from "../../context/MainContext";

function RegistrationCreate (){
  const { setOpenModal } = React.useContext(MainContext);

  const onClick = () => {
    setOpenModal(false)
  }

    return (
      <div>
      <h1>Pagina CREAR</h1>
      <button onClick={onClick}>Cerrar</button>
      </div>
    );
}

export default RegistrationCreate