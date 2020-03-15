import React, { Component } from 'react';

export class SearchBar extends Component {
	state = { term: '' };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		// TODO:
		// Callback from parent Component
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor=''> Video Search</label>
						<input
							type='text'
							placeholder='enter search'
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
