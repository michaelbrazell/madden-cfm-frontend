var React = require('react');
var TeamCard = require('TeamCard');

var LeagueInfo = React.createClass({
  render: function() {
    return (
      <div>
        <h1>League Info</h1>
        <p>To do:</p>
        <ul>
          <li>Loop through teams from leagueTeamInfo.json</li>
        </ul>
        <h2>Teams</h2>
        <div className="row">
          <TeamCard />
        </div>
      </div>
    );
  }
});

module.exports = LeagueInfo;
