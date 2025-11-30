module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "./src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
