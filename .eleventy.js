module.exports = async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({ "src/_assets/icons": "icons" });

  // REQUIRE the Markdown-It library Eleventy uses internally
  let markdownIt = require("markdown-it");

  // Get the default configuration object from Eleventy
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  
  // Create an instance of the parser
  let md = markdownIt(options);

  // Register the custom 'markdown' filter
  // The first argument is the filter name (e.g., 'markdown')
  // The second argument is the function that runs when the filter is called.
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
  // Font Awesome plugin is an ES module, so we need to use dynamic import
  const fontAwesomePlugin = (await import("@11ty/font-awesome")).default;
  
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(fontAwesomePlugin);

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
