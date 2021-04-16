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
        'largest-contentful-paint': ['warn', {'maxNumericValue': 2500}],
        'largest-contentful-paint': ['error', {'maxNumericValue': 4000}],
        'total-blocking-time': ['warn', {'maxNumericValue': 300}],
        'total-blocking-time': ['error', {'maxNumericValue': 600}],
        'cumulative-layout-shift': ['warn', {'maxNumericValue': 0.1}],
        'cumulative-layout-shift': ['error', {'maxNumericValue': 0.25}],
        'resource-summary:document:size': ['warn', {'maxNumericValue': 20000}],
        'resource-summary:image:size': ['warn', {'maxNumericValue': 1500000}],
      }
    },
    upload: {
      target: 'temporary-public-storage',
    }
  },
};
