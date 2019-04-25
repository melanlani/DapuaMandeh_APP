import axios from 'axios';
import { baseUrl } from './api';

export const getRecipe = () => {
  return {
    type: 'GET_RECIPE',
    payload: axios.get(`${baseUrl}/api/v1/user/recipes`)
  }
}
