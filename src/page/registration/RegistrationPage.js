import React, { useState, useEffect } from "react";
import { Modal } from '../../components/modal/Modal'
import { MainContext } from "../../context/MainContext";
import RegistrationCreate from "./RegistrationCreate";
import RegistrationUpdate from "./RegistrationUpdate";
import RegistrationList from "./RegistrationList";
import Registration from "./Registration";
import { getListRegistration } from '../../service/registrationService'


function PrincipalPage() {

  const { openModal, setOpenModal, updating, idToEdit} = React.useContext(MainContext);
  const [registrations, setRegistrations] = useState([]);
  
  useEffect(() => {
    getListRegistration().then(data => {
      setRegistrations(data);     
  
    }
    );
  }, [openModal]);

  const onClick = () => {
    setOpenModal(true)
  }


  return (
    <div>
      <h1>Pagina Princpal Evento</h1>
      <button onClick={onClick}>Registrar</button>
      <RegistrationList>      
        {
          registrations.map(item =>
            <Registration
              key={item.id}
              registrationItem={item} />
          )
        }
      </RegistrationList>

      {!!openModal &&
        (
          <Modal>
            { updating ? <RegistrationUpdate registrationId={idToEdit} /> :<RegistrationCreate /> }
          </Modal>
        )
      }
    </div>


  );
}


export default PrincipalPage