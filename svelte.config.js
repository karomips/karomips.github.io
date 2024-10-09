import adapter from '@sveltejs/adapter-auto';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    paths: {
      base: dev ? '' : '/karomips.github.io',  // Set the base path for GitHub Pages
    },
    adapter: adapter(),
  },
};
