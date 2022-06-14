import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/action/pizzas';

import { Home, Cart } from './pages';
import { Header } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
