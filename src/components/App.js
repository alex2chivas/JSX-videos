import React, { Component } from 'react';

import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export class App extends Component {
	state = { videos: [], selectedVideo: null };

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
			alert('The request for videos is currently not working, please try again later');
		}
	};

	onVideoSelect = (video) => {
		this.setState({
			selectedVideo: video
		});
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
			</div>
		);
	}
}

export default App;
