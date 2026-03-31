import { useRef } from "react";

interface Props {
  onRegister: string[]
}

function RegistrationForm({ onRegister }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    
    
    e.preventDefault();
    
    
    
    
    
      
      if (inputRef.current != null) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
      
    }
    onRegister(inputRef.current?.value);
  

  return (
    <>
    <h1>Gebruikerregistratie</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Vul je gebruikersnaam in" />
      <button type="submit">Check / Registreer</button>
    </form>
    </>
  );
}

export default RegistrationForm;
