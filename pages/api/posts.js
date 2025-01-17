/* eslint-disable no-console */
import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://159.203.123.13',
  key: '02586fd50c1a9072970aaf8592',
  version: 'v3',
});

export const getPosts = async () => {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getPost = async (slug) => {
  return await api.posts
    .read({
      slug,
    })
    .catch((error) => {
      console.error(error);
    });
};
