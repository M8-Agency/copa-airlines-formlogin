module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CopaAirlinesFormLogin',
      externals: {
        react: 'React'
      }
    }
  }
}
