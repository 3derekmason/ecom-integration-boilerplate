module.exports = {
  integrations: {
    ecom: {
      // name of integration
      location: '@vue-storefront/ecom-api/server',
      configuration: {
        api: {
          url: '', // URL of e-commerce platform
        },
      },
    },
  },
};
