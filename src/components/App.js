import React, { Component } from 'react';

import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';

export class App extends Component {
	state = { videos: [] };

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
				order: 'rating'
			}
		});

		if (response.status === 200) {
			this.setState({ videos: response.data.items });
		} else {
			console.log(' Error with the Api call for youtube videos ');
		}
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
