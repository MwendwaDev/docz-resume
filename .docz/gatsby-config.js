const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Next Gen Documentation',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\user\\Desktop\\newapp\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Next Gen Documentation',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\user\\Desktop\\newapp',
          templates:
            'C:\\Users\\user\\Desktop\\newapp\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\user\\Desktop\\newapp\\.docz',
          cache: 'C:\\Users\\user\\Desktop\\newapp\\.docz\\.cache',
          app: 'C:\\Users\\user\\Desktop\\newapp\\.docz\\app',
          appPackageJson: 'C:\\Users\\user\\Desktop\\newapp\\package.json',
          appTsConfig: 'C:\\Users\\user\\Desktop\\newapp\\tsconfig.json',
          gatsbyConfig: 'C:\\Users\\user\\Desktop\\newapp\\gatsby-config.js',
          gatsbyBrowser: 'C:\\Users\\user\\Desktop\\newapp\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\user\\Desktop\\newapp\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\user\\Desktop\\newapp\\gatsby-ssr.js',
          importsJs: 'C:\\Users\\user\\Desktop\\newapp\\.docz\\app\\imports.js',
          rootJs: 'C:\\Users\\user\\Desktop\\newapp\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Users\\user\\Desktop\\newapp\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\Users\\user\\Desktop\\newapp\\.docz\\app\\index.html',
          db: 'C:\\Users\\user\\Desktop\\newapp\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
