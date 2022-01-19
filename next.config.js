const path = require("path");

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  sassOptions: {
    modules: {
      localIdentName: "[hash:base64:5]",
    },
    includePaths: [path.join(__dirname, "styles")],
  },
};
