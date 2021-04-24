const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    server: isProd ? "noted-hangout-310606.an.r.appspot.com" : "http://localhost:8080"
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
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