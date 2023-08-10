import React, { useState } from 'react';
import './style.scss';
import { FormInput } from '../components/UI/FormInput';
import * as FormValidation from '../components/utils/FormValidation';

export default function LoginPage () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleFieldChange = (event, validationFunction) => {
    const newValue = event.target.value;
    const fieldName = event.target.id;
    const error = validationFunction(newValue);
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
    if (fieldName === 'username') {
      setUsername(newValue);
    } else if (fieldName === 'password') {
      setPassword(newValue);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const validationErrors = {
      username: FormValidation.validateRequired(username, 'Username is required'),
      password: FormValidation.validateRequired(password, 'Password is required'),
    };

    if (Object.values(validationErrors).some((error) => error !== '')) {
      setErrors(validationErrors);
    } else {
      // Perform login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <div className="login-container ">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <FormInput
          id="username"
          label="Username"
          value={username}
          onChange={(event) => handleFieldChange(event, FormValidation.validateRequired)}
          error={errors.username}
        />
        <FormInput
          id="password"
          label="Password"
          value={password}
          onChange={(event) => handleFieldChange(event, FormValidation.validateRequired)}
          error={errors.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


