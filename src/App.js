import React, { Fragment } from 'react';
import './App.css';
import Meraki from './components/Navbar';
import Formulario from './components/Formulario'

function App() {
  return (
    <Fragment>
      <Meraki />
      <Formulario />
    </Fragment>
  );
}

export default App;
