module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/static/dist/"
      : "http://127.0.0.1:8080",
  // Added pages per Vue Docs
  pages: {
    index: {
      entry: "./src/pages/home/main.js", // matching the new paths created above
      template: "public/index.html",
      filename: "../../templates/base-vue.html", // relative to outputDir!
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    about: {
      entry: "./src/pages/about/main.js", // matching the new paths created above
      template: "public/index.html",
      filename: "../../templates/base-vue-about.html", // relative to outputDir!
      chunks: ["chunk-vendors", "chunk-common", "about"]
    }
  },

  outputDir: "../server/static/dist",
  chainWebpack: config => {
    /*
            The arrow function in writeToDisk(...) tells the dev server to write
            only index.html to the disk.
            The indexPath option (see above) instructs Webpack to also rename
            index.html to base-vue.html and save it to Django templates folder.
            We don't need other assets on the disk (CSS, JS...) - the dev server
            can serve them from memory.
            See also:
            https://cli.vuejs.org/config/#indexpath
            https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
            */
    config.devServer
      .public("http://127.0.0.1:8080")
      .hotOnly(true)
      .headers({ "Access-Control-Allow-Origin": "*" })
      .writeToDisk(filePath => filePath.endsWith(".html")); //NOTE THIS CHANGE HERE
  }
};
