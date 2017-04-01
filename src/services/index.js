import { create } from 'apisauce';

const api = create({ baseURL: '/api' });

if (process.env.NODE_ENV !== 'production') {
  const monitor = response => {
    const { config: { method, url }, status } = response;
    const request = `%c${status} %c${method.toUpperCase()} ${url}`;
    const code = status < 300 ? 'color: green;' : 'color: red;';
    console.log(request, code, 'color: gold; font-weight: bold', response); // eslint-disable-line
  };
  api.addMonitor(monitor);
}

const fetchPosts = () => api.get('/posts');

export default {
  fetchPosts,
};
