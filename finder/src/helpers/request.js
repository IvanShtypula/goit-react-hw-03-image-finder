import axios from "axios";

export const withCreadentials = (url) => {
  return `${url}key=${process.env.REACT_APP_KEY}`;
};

export const createGalleryUrl = (search, currentPage = 1, perPage = 12) => {
  return withCreadentials(
    `https://pixabay.com/api/?q=${search}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${perPage}&`
  )
}

export const request = async (method, url, body = null) => {
  const result = await axios[method](url, body);
  return result.data;
};