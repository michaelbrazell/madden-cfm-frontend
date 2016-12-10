var React = require('react');
var Nav = require('Nav');
var LeagueInfo = require('LeagueInfo');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns small-12 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
