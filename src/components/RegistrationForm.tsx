import { useRef } from "react";

interface Props {
  onRegister: string[]
}

function RegistrationForm({ onRegister }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    
    
    e.preventDefault();
    
    const value = inputRef.current?.value;
    
    
    if (value != null) {
      onRegister(value);
      if (inputRef.current != null) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
    }
  };

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
