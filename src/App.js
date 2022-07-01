import './App.css';
import React from 'react'
import HeaderComponent from './components/HeaderComponent';
import ListExpenseComponent from './components/ListExpenseComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListExpenseComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
