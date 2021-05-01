const path = require("path");

module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
  env: {
    API_URL_PROD: process.env.API_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  i18n: {
    locales: ["en-US", "ja"],
    defaultLocale: "ja",
  },
}