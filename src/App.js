import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({firstname: '', age: ''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }
  
  const showAlert = () => {
    alert(`Hello ${person.firstname}`);
  }

  const showAlert2 = () => {
    alert(`You are too young`);
  }
  

return (
  <div className="App">
    Name: {person.firstname}  Age: {person.age}<br />
    <form>
      <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
      <input placeholder="Age" name="age" value={person.age} type="number" onChange={inputChanged} />
      {person.age <= 18
        ? <button onClick={showAlert2}>Check age</button>
        : <button onClick={showAlert}>Check age</button>
      }
    </form>
  </div>
);
}

export default App;