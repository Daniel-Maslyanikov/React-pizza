import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas } from './redux/action/pizzas'


import { Home, Cart } from './pages';
import { Header } from './components';
import { Route, Routes } from 'react-router-dom';




class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			this.props.dispatch(setPizzas(data.pizzas));
		});
	}

	render() {
		return (
			<div className="wrapper">
				<Header />
				<div className="content">
					<Routes>
						<Route exact path="/" element={<Home items={this.props.items} />} />
						<Route exact path="/cart" element={<Cart />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.pizzas.items,
	}
}


export default connect(mapStateToProps)(App);
