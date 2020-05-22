const path = require('path')
const pathToInlineSvg = path.resolve(__dirname, '../src/media/')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader')
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ]
  config.module.rules[0].use[0].options.plugins = [
    // NOTE: use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // NOTE: use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
  ]
  // NOTE: Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main']

  // TODO: Maybe use [`Rule Issuer`](https://webpack.js.org/configuration/module/#rule-issuer)
  const fileLoaderRule = config.module.rules.find(rule =>
    rule.test.test('.svg')
  )

  fileLoaderRule.exclude = pathToInlineSvg

  // TODO: Maybe use [`Rule Issuer`](https://webpack.js.org/configuration/module/#rule-issuer)
  config.module.rules = config.module.rules.map(rule => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      }
    }

    return rule
  })

  config.module.rules.push(
    {
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [
        {
          loader: '@svgr/webpack',
        },
        {
          loader: 'url-loader',
        },
      ],
    },
    {
      test: /\.(png|jpe?g|gif|ttf|woff|woff2)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }
  )

  // Return the altered config
  return config
}
