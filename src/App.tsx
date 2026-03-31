import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

export default function App() {
const [GeregistreerdePersonen, setGeregistreerdePersonen] = useState(["Karel", "Els", "Piet"]);


    
  return (
    <>
    <RegistrationForm onRegister={GeregistreerdePersonen}/>
    <UserList lijst ={GeregistreerdePersonen}/>
    </>
  );
}
