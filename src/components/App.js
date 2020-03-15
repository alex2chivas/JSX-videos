import React, { Component } from 'react';

import SearchBar from './SearchBar';
import youtube from './apis/youtube';

export class App extends Component {
	state = { videos: [] };

	onTermSubmit = (term) => {
		youtube.get('/search', {
			params: {
				q: term,
				order: 'rating'
			}
		});
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onTermSubmit={this.onTermSubmit} />
			</div>
		);
	}
}

export default App;
