import React, { useState } from "react";
import "./style.scss";
import { FormInput } from "../components/UI/FormInput";
import * as FormValidation from '../components/utils/FormValidation';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '', confirmPassword: '' });

  const handleFieldChange = (event, validationFunction) => {
    const newValue = event.target.value;
    const fieldName = event.target.id;
    const error = validationFunction(newValue);
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
    if (fieldName === 'username') {
      setUsername(newValue);
    } else if (fieldName === 'email') {
      setEmail(newValue);
    } else if (fieldName === 'password') {
      setPassword(newValue);
    } else if (fieldName === 'confirmPassword') {
      setConfirmPassword(newValue);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const validationErrors = {
      username: FormValidation.validateRequired(username, 'Username is required'),
      email: FormValidation.validateEmail(email),
      password: FormValidation.validatePassword(password),
      confirmPassword: FormValidation.validateConfirmPassword(confirmPassword, password),
    };

    if (Object.values(validationErrors).some((error) => error !== '')) {
      setErrors(validationErrors);
    } else {
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
      <FormInput
          id="username"
          label="Username"
          value={username}
          onChange={(event) => handleFieldChange(event, FormValidation.validateRequired)}
          error={errors.username}
        />
        <FormInput
          id="email"
          label="Email"
          value={email}
          onChange={(event) => handleFieldChange(event, FormValidation.validateEmail)}
          error={errors.email}
        />
        <FormInput
          id="password"
          label="Password"
          value={password}
          onChange={(event) => handleFieldChange(event, FormValidation.validatePassword)}
          error={errors.password}
        />
        <FormInput
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(event) => handleFieldChange(event, (value) => FormValidation.validateConfirmPassword(value, password))}
          error={errors.confirmPassword}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
