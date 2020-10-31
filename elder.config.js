module.exports = {
  origin: "",
  srcDir: "src",
  distDir: "public",
  rootDir: process.cwd(),
  build: {},
  server: {
    prefix: "",
  },
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncommenting this would disabled writing your files on build.
  },
  plugins: {
    // '@elderjs/plugin-markdown': { // Markdown plugin, enable if used
    //   routes: ['blog'],
    // },
    "@elderjs/plugin-browser-reload": {
      // this reloads your browser when nodemon restarts your server.
      port: 8080,
    },
  },
  shortcodes: { closePattern: "}}", openPattern: "{{" },
};
