import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
 const { data } = await axios.get((url), {
headers: {
    'X-RapidAPI-Key': '06cf55d72bmsh7873689ed56418dp1f1d01jsn798faade9b39',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
 });

 return data;
}