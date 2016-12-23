var React = require('react');
var data = require('json!../../public/data/leagueTeamInfoList.json');

var TeamSelect = React.createClass({
  getInitialState: function () {
    var teams = data;
    return { teams }
  },
  render: function () {
    /* Need to tie this into webpack, currently does nothing */
    return (
      <select onChange={this.updateRoster}>
        {this.state.teams.map(function(team, i) {
          return (
            <option key={i} value={team.abbrName}>{team.cityName} {team.displayName}</option>
          )
        })}
      </select>
    );
  }
});

module.exports = TeamSelect;
