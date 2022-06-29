import React, { useState, useEffect } from "react";
import { Modal } from '../../components/modal/Modal'
import { MainContext } from "../../context/MainContext";
import RegistrationCreate from "./RegistrationCreate";
import RegistrationUpdate from "./RegistrationUpdate";
import RegistrationList from "./RegistrationList";
import Registration from "./Registration";
import { getListRegistration, findByNamesRegistration } from '../../service/registrationService'


function PrincipalPage() {

  const { openModal, setOpenModal, updating, idToEdit } = React.useContext(MainContext);
  const [registrations, setRegistrations] = useState([]);
  const [itemSearch, setItemSearch] = useState('');

  useEffect(() => {
    getListRegistration().then(data => {
      setRegistrations(data);
    }
    );
  }, [openModal]);

  const onClick = () => {
    setOpenModal(true)
  }
  const onClickSearch = () => {
    if (itemSearch.trim().length != 0) {
      findByNamesRegistration(itemSearch).then(data => {
        setRegistrations(data);
      }
      )
    }
    else
      getListRegistration().then(data => {
        setRegistrations(data);
      }
      );
  }
  const onChange = (event) => {
    if (event.target.name === 'itemSearch')
      setItemSearch(event.target.value)
  }


  return (
    <div>
      <h1>Pagina Princpal Evento</h1>
      <div>
        <input placeholder="Buscar..." name="itemSearch" value={itemSearch} onChange={onChange} />
        <button onClick={onClickSearch}>Buscar</button>
        <button onClick={onClick}>Nuevo</button>
      </div>
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
            {updating ? <RegistrationUpdate registrationId={idToEdit} /> : <RegistrationCreate />}
          </Modal>
        )
      }
    </div>


  );
}


export default PrincipalPage