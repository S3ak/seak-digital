module.exports = {
  ci: {
    upload: {
      target: ".next",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    collect: {
      staticDistDir: "./out/",
    },
  },
};
