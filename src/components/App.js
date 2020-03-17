import React, { Component } from 'react';

import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { randomItem } from './randomItem';

export class App extends Component {
	state = { videos: [], selectedVideo: null };

	randomSelection = (items) => {
		return items[Math.floor(Math.random() * items.length)];
	};

	componentDidMount() {
		this.onTermSubmit(this.randomSelection(randomItem));
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
				order: 'rating'
			}
		});

		if (response.status === 200) {
			this.setState({
				videos: response.data.items,
				selectedVideo: response.data.items[0]
			});
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
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
