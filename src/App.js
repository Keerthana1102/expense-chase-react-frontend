import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListExpenseComponent from './components/ListExpenseComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes> http://localhost:3000/
              <Route path="/" element={<ListExpenseComponent />} />
              <Route path="/expenses" element={<ListExpenseComponent />} />
              {/* <ListExpenseComponent /> */}
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
