import React from "react";

import { MainContext } from "../../context/MainContext";

function Registration ({registrationItem}){
  const { setOpenModal, setUpdating,setIdToEdit } = React.useContext(MainContext);

  const onClick = () => {
    console.log(registrationItem.id)
    setUpdating(true);
    setOpenModal(true);
    setIdToEdit(registrationItem.id);
  }

    return (
      <tr>
      <td>{registrationItem.id} </td>
      <td>{registrationItem.firstname} </td>
      <td>{registrationItem.lastname} </td>
      <td>{registrationItem.email} </td>
      <td>{registrationItem.role} </td>            
      <td>
          <span onClick={onClick}>Editar </span>
          
      </td>

  </tr>

    );
}

export default Registration