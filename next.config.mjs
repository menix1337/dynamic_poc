/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
const isDev = process.env.BUILD_TYPE === "development";

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? JSON.parse(process.env.ALLOWED_ORIGINS)
  : [];

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  compress: false,
  //assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out..
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors 'self' ${allowedOrigins.join(" ")}`,
          },
        ],
      },
    ];
  },
};

export default config;
