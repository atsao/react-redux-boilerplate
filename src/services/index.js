import { create } from 'apisauce';

const api = create({ baseURL: '/api' });

api.addMonitor(response => {
  console.log('response:', response);
})

const fetchPosts = () => api.get('/posts');

export default {
  fetchPosts,
};
