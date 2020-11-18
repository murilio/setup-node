module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@controllers': './src/controllers',
        '@database': './src/database',
        '@middlewares': './src/middlewares',
        '@models': './src/models'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
