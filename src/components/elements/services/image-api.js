import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32132711-b96f3c648b1b059401eaf066a',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const SearchQuery = async (search, page) => {
  const { data } = await instance.get('/', {
    params: {
      q: search,
      page,
    },
  });
  return data;
};
