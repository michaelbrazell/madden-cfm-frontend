var React = require('react');
var TeamSelect = require('TeamSelect');
var PlayerCard = require('PlayerCard');
var teamData = require('json!leagueTeamInfoList');
var RosterBAL = require('json!rosterBAL');
var RosterWAS = require('json!rosterWAS');
// var UpdatedRoster = require('json!roster')

var Teams = React.createClass({
  getInitialState: function () {
    return {
      team: 'Choose a Team',
      teamList: teamData,
      teamRoster: RosterBAL,
    }
  },
  updateRoster: function (e) {
    // this is janky, uses conditional to change to washington Redskins but it works...
    var teamName = e.target.value;
    if (teamName === 'Washington Redskins') {
      this.setState({
        team: e.target.value,
        teamRoster: RosterWAS,
      })
    } else {
      this.setState({
        team: e.target.value,
        teamRoster: RosterBAL
      })
    }
  },
  render: function() {
    const teamSelectList = this.state.teamList.map((team, i) => {
      return (
        <TeamSelect
          key={i}
          abbrName={team.abbrName}
          combinedName = {team.cityName + ' ' + team.displayName}
          />
      )
    });
    const players = this.state.teamRoster.map((player, i) => {
      return (
        <PlayerCard
          key={player.lastName + '-' + i}
          firstName={player.firstName}
          lastName={player.lastName}
          position={player.position}
          age={player.age}
          college={player.college}
          playerBestOvr={player.playerBestOvr}
          />
      )
    });
    return (
      <div className="row">
        <div className="columns small-12">
          <h1>Team Rosters</h1>
            <div className="row">
              <div className="columns small-12 medium-6">
                <h2>{this.state.team}</h2>
              </div>
                <div className="columns small-12 medium-6">
                  <select onChange={this.updateRoster}>
                    {teamSelectList}
                  </select>
                </div>
            </div>
            <div className="row">
              <div className="columns small-12">
                <div className="row" data-equalizer>
                  {players}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="columns small-12">
                <ul>
                  <li>Team Names list</li>
                </ul>
                <p>To do:</p>
                <ul>
                  <li>Build hash table of teams/teamID, refer to leagueTeamInfoList</li>
                  <li>Write Function that matches teamID from roster file and teamInfo file, and then uses name associated to that comparison</li>
                  <li>Optional: Use if statement for position to drill down positions. Goes inside of players const before render</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Teams;
