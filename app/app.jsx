var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Standings = require('Standings');
var LeagueInfo = require('LeagueInfo');
var TeamStats = require('TeamStats');
var Teams = require('Teams');

// Load Foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css')
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/standings" component={Standings}/>
      <Route path="/team-stats" component={TeamStats}/>
      <Route path="/team-rosters" component={Teams}/>
      <IndexRoute component={LeagueInfo}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
