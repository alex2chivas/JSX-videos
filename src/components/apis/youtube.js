import axios from 'axios';

const KEY = 'AIzaSyDb6Jsr1uR7CF5bddman4HYdJoffowPIvM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 10,
		key: `${KEY}`,
		Errors: {
			badRequest: 'invalidChannelId',
			forbidden: 'forbidden'
		}
	}
});
