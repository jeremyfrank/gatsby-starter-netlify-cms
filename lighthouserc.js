module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost/',
        'http://localhost/products'
      ],
      staticDistDir: './public'
    },
    assert: {
      assertions: {
        'first-contentful-paint': ['error', {'maxNumericValue': 2000}],
        'resource-summary:document:size': ['warn', {'maxNumericValue': 20000}],
        'resource-summary:image:size': ['warn', {'maxNumericValue': 1500000}],
      }
    },
    upload: {
      target: 'temporary-public-storage',
    }
  },
};
