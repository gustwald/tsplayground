import React, { useState } from 'react';
import { Header } from './Header';
import { ThemeProvider } from './ThemeProvider';
import { UserProvider } from './UserProvider';
import { UserContext } from './Contexts';
import './App.scss';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Header />
      </UserProvider>
    </ThemeProvider>
  )
}



export default App;
