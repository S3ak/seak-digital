module.exports = {
  ci: {
    upload: {
      target: ".next",
    },
    assert: {
      preset: "lighthouse:default",
    },
    collect: {
      staticDistDir: "build",
    },
  },
};
