import React from 'react';
import axios from 'axios';


import { Home, Cart } from './pages';
import { Header } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			setPizzas(data.pizzas);
		})
	}, []);



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={pizzas} />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
