import { create } from 'apisauce';

const api = create({ baseURL: '/api' });

if (process.env.NODE_ENV !== 'production') {
  const monitor = response => {
    const { config: { method, url }, status } = response;
    const request = `%c ${method.toUpperCase()}: ${url} %c${status}`;
    const code = status < 300 ? 'color: green;' : 'color: red;';
    console.log(request, 'color: gold; font-weight: bold', code, response); // eslint-disable-line
  };
  api.addMonitor(monitor);
}

const fetchPosts = () => api.get('/posts');

export default {
  fetchPosts,
};
