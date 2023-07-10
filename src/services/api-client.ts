import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8fe3ba60ede24915bb78c74457c9eb2c',
  },
});
