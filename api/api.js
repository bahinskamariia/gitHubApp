import axios from 'axios';

const API_URL = 'https://api.github.com/search/repositories?q=';

export const searchProject = async (searchQuery) => {
  if (!searchQuery) {
    return;
  }
  try {
    const { data } = await axios.get(`${API_URL}${searchQuery}`);

    return data.items;
  } catch (e) {
    throw error(e);
  }
};
