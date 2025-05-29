import axios from 'axios';
const API_URL = 'http://localhost:3000/api/vehicles';

const get_cars_service = async () => {
  const result = await axios.get(`${API_URL}/all`);
  return result;
}

const create_cars_service = async (data) => {
  const result = await axios.post(`${API_URL}/create`, data);
  return result;
}

export { get_cars_service, create_cars_service }