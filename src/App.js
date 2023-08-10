import React from 'react';
import './App.scss';
import LoginPage from './Pages/LoginPage'; 
import RegisterPage from './Pages/RegisterPage';
function App() {
  return (
    <div className="App">
      <main>
        <LoginPage />
        <RegisterPage/>
      </main>
    </div>
  );
}

export default App;
