let config = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
};

if (process.env.NEXT_PUBLIC_BASE_PATH) {
  config.images = {
    loader: "imgix",
    path: process.env.NEXT_PUBLIC_BASE_PATH,
  };
}

module.exports = config;
