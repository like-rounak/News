import axios from 'axios';
import { NEWS_API_KEY } from '@env';

const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'us',
        apiKey: NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};
