import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainProvider  } from "./context/MainContext";
import Navbar from './components/navbar/Navbar'
import RegistrationPage from './page/registration/RegistrationPage'
import RegistrationCreate from './page/registration/RegistrationCreate'
import RegistrationUpdate from './page/registration/RegistrationUpdate'

function App() {
  return (
    <MainProvider>
        <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/registrationnew" element={<RegistrationCreate />} />
        <Route path="/registrationupdate/:customerId" element={ <RegistrationUpdate />   }/>             
           

        
      </Routes>
    </BrowserRouter> 
    </MainProvider>
  );
}

export default App;
