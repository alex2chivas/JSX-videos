import React, { Component } from 'react';

import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { arrayOfItems, randomSelection } from './randomArray';

export class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit(randomSelection(arrayOfItems));
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
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

		window.scrollTo(0, 0);
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
