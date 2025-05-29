import { createContext, useContext, useState, useEffect } from "react";
import { get_cars_service, create_cars_service } from "../Services/carServices";

const CarContext = createContext({});
const CarProvider = (props) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCart();
  }, []);

  const getAllCart = async () => {
    try {
      const result = await get_cars_service();
      if (result.status === 200) {
        setCars(result.data);
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  }

  const createCar = async (vehicles) => {
    try {
      const result = await create_cars_service(vehicles);
      if (result.status === 200) {
        getAllCart();
      }
    } catch (error) {
      console.error('Error creating car:', error);
      throw error;
    }
  }

  const values = { cars, setCars, createCar }

  return (
    <CarContext.Provider value={values}>
      {props.children}
    </CarContext.Provider>)
}

const useCarContext = () => { return useContext(CarContext) };
export { CarProvider, useCarContext };