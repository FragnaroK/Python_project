const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("postcss-import"),
    require("autoprefixer"),
    purgecss({
      content: ["./dist/*.html", "./dist/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
