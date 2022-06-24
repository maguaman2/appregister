function RegistrationList(props){
	return(
		<div className="product-list">
		<table>
		<thead >
		  <tr>
			
			<th>id</th>
			<th>Nombre</th>
			<th>Apellido</th>
			<th>Correo</th>
			<th>Rol</th>
			<th>Acciones</th>
			
		  </tr>
		</thead>
		<tbody>
	        {props.children}
			</tbody>
  </table>
  </div>
	);
	}
	
	export default RegistrationList