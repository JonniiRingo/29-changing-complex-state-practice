import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const {value, name} = event.target;

    setContact(prevValue => {
      if (name === "fName"){
        return {
          ... prevValue,
          [name]: value,
        };
      }
    });
  }


  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input 
          onChange={handleChange}
          name="fName" 
          type="text"
          placeholder="First Name" 
          value={contact.fName}
        />
        <input 
          onChange={handleChange}
          name="lName" 
          placeholder="Last Name"
          value={contact.lName} 
        />
        <input 
          onChange={handleChange}
          name="email" 
          placeholder="Email" 
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
