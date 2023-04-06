import './App.css';
import React, {useState} from 'react'
import Form from './Components/Form';
import formSchema from './Components/formSchema';
import * as yup from 'yup'
import axios from 'axios';

function App() {

const initialFormValues = {
    
    fullname: '',
    email: '',
    password: '',
    kickout: false,
    social: false,
    community: false
}
const initialFormError = {
    
  fullname: '',
  email: '',
  password: '',
  kickout: '',
  social: '',
  community: ''
}


const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors,setFormErrors] = useState(initialFormError);
const [users, setUsers] = useState([]);

const handleSubmit = () => {
  axios.post('https://reqres.in/api/users', formValues)
    .then(res=>{
      setUsers([res.data,...users])
    })
    .catch(err => console.error(err))
  
}

const validate = (name,value) => {
  yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const handleChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name] : value});
}

  return (
    <div className="App">
      <header>
        <h1>The Practice Form</h1>
      </header>
      <Form
        values={formValues}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
      />
      {users.map(user => (
        <div key={user.id}> 
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
