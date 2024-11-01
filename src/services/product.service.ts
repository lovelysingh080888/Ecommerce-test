import axios from "axios";

const  endpoint = process.env.REACT_APP_API_BASE_URL
export const fetchProducts = async () => {
  const { data } = await axios.get(`${endpoint}/products`);
  return data.products;
};

export const fetchCategories = async () => {
  const { data } = await axios.get(`${endpoint}/products/category-list`);
  return data;
};
