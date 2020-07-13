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
        'resource-summary:document:size': ['error', {'maxNumericValue': 20000}],
        'resource-summary:image:size': ['error', {'maxNumericValue': 1500000}],
      }
    },
  },
};
