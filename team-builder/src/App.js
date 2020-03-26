import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css';
import Form from './Form'


const initialMembers = [
  { id: uuid(), name: 'John', email: 'john@lambda.com', role: 'frontend engineer'},
  { id: uuid(), name: 'Jane', email: 'jane@lambda.com', role:'backend engineer' },
  { id: uuid(), name: 'Sam', email: 'sam@lambda.com', role:'designer' },
]




function App() {

  const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState({
    name: '',
    email:'',
    role:'',

  })

  const onInputChange = event => {
 
    const inputThatChanged = event.target.name

    const newValueForInput = event.target.value
  
    setFormValues({
    
      ...formValues,
  
      [inputThatChanged]: newValueForInput,
    })
  }

  const onFormSubmit = event => {
 
    event.preventDefault()

    const newMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
      
    }
    setMembers([...members, newMember]) 
    members.push(newMember);

  }

  return (
    <div className="App">
   <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />

      <h3>List of Team Members:</h3>
      {
        members.map(member => <div key={member.id}>{member.name} {member.email} {member.role}
        </div>)
      }
       
    </div>
  );
}

export default App;
