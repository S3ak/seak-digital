const withManifest = require("next-manifest");

const defaults = {
  // next-manifest options
  output: "./build/", // The folder where the manifest will be generated.
  // manifest options
  name: "Seak Digital",
  icons: [
    {
      src: "/build/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/build/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

module.exports = withManifest({
  manifest: {
    ...defaults,
  },
  distDir: "build",
});
