import axios from 'axios';

const KEY = 'AIzaSyBKnlzCMf4qnSMv34y99-J34qBAKN62Qjs';

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
