module.exports = {
  ci: {
    upload: {
      target: ".build",
      upload: {
        target: "lhci",
        serverBaseUrl: "https://your-lhci-server-url.example.com",
        token: process.env.LHCI_GITHUB_APP_TOKEN, // could also use LHCI_TOKEN variable instead
      },
    },
    collect: {
      staticDistDir: "build",
    },
  },
};
