var React = require('react');
var TeamCard = require('TeamCard');
var data = require('json!leagueTeamInfoList');

var LeagueInfo = React.createClass({
  getInitialState: function() {
    var teams = data;
    return { teams };
  },
  render: function() {
    const teamsList = this.state.teams.map((team, i) => {
      return (
        <TeamCard
          key={'team-' + i + '-' + team.abbrName}
          abbrName={team.abbrName}
          ovrRating={team.ovrRating}
          cityName={team.cityName}
          displayName={team.displayName}
          divName={team.divName}
          userName={team.userName} />
      );
    });
    return (
      <div>
        <h1>League Overview</h1>
        <h2>Teams</h2>
        <div className="row">
          {teamsList}
        </div>
        <p>To do:</p>
        <ul>
          <li>Use axios to pull data from Firebase</li>
          <li>Link up teams
            <ul>
              <li>Look into adding rosters</li>
              <li>Dynamic team routes</li>
            </ul>
          </li>
          <li>Add archived data and archiving system</li>
          <li>Add week count to nav from teamStandingInfo</li>
          <li>Change styling:
            <ul>
              <li>Add badge for user owned teams</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = LeagueInfo;
