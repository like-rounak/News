import axios from 'axios';
import { NEWS_API_KEY } from '@env';

const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (category = 'general', sortOrder = 'publishedAt') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'us',
        category: category,
        apiKey: NEWS_API_KEY,
        sortBy: sortOrder,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};
