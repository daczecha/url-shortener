import axios from 'axios';

const baseUrl = 'http://localhost:3003/r';

const shortenUrl = async (body) => {
  const response = await axios.post(baseUrl, body);
  return response.data;
};

export default shortenUrl;
