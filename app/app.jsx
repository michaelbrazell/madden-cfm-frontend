var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Standings = require('Standings');
var Info = require('Info');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/standings" component={Standings}/>
      <IndexRoute component={Info}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
