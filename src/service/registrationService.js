import API from '../constants/apiUlr'

const getListRegistration = async () => {
    const response = await fetch(`${API}/registration`);    
    const data = await response.json();
    return  data;
}

const findByIdRegistration = async (registrationId) => {
    const response = await fetch(`${API}/registration/${registrationId}`);  
    const data = await response.json();     
    return  data;
}

const findByNamesRegistration = async (searchItem) => {
    const response = await fetch(`${API}/registration/${searchItem}/search`);  
    const data = await response.json();     
    return  data;
}

export {
    findByIdRegistration,
    getListRegistration,
    findByNamesRegistration
    
}