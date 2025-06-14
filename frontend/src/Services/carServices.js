import axios from 'axios';
const API_URL = 'http://localhost:3000/vehicles';

const get_cars_service = async () => {
  const result = await axios.get(`${API_URL}/all`);
  return result;
}

const create_cars_service = async (data) => {
  const vehicles = {
    brand: data.brand,
    model: data.model,
    color: data.color,
    engine: data.engine,
    alimentation: data.alimentation,
    year: parseInt(data.year),
    transmission: data.transmission,
    type: data.type,
    available: data.available,
    description: data.description,
  }
  const result = await axios.post(`${API_URL}/create`, vehicles);
  return result;
}

const delete_car_service = async(id)=>{
  const result = await axios.delete(`${API_URL}/${id}`);
  return result;
}


const get_car_by_id_service = async (id) => {
  const result = await axios.get(`${API_URL}/${id}`);
  return result;
}

export { get_cars_service, create_cars_service, delete_car_service, get_car_by_id_service }