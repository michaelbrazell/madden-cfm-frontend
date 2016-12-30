var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    // 'script!foundation-sites/dist/foundation.min.js',
    'script!tablesorter/dist/js/jquery.tablesorter.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: `jQuery`
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      LeagueInfo: 'app/components/LeagueInfo.jsx',
      Standings: 'app/components/Standings.jsx',
      TeamCard: 'app/components/TeamCard.jsx',
      TeamStats: 'app/components/TeamStats.jsx',
      Teams: 'app/components/Teams.jsx',
      TeamSelect: 'app/components/TeamSelect.jsx',
      teamStandingsInfoList: 'public/data/teamStandingInfoList.json',
      leagueTeamInfoList: 'public/data/leagueTeamInfoList.json',
      rosterBAL: 'public/data/roster/rosterBAL.json',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
