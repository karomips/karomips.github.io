import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    paths: {
      base: '/karomips.github.io', // this should match your GitHub repository name
    },
  },
};
