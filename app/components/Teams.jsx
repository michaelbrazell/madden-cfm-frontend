var React = require('react');
var TeamSelect = require('TeamSelect');
var teamData = require('json!leagueTeamInfoList');
var Roster = require ('json!rosterBAL');

var Teams = React.createClass({
  getInitialState: function () {
    var teamList = {};
    var teamRoster = {}
    return {
      team: 'Choose a Team',
      teamList: teamData,
      teamRoster: Roster,
    }
  },
  updateRoster: function (e) {
    this.setState({
      team: e.target.value
    })
  },
  render: function() {
    const teamSelectList = this.state.teamList.map((team, i) => {
      return (
        <TeamSelect
          key={i}
          abbrName={team.abbrName}
          cityName={team.cityName}
          displayName={team.displayName}
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
                  {this.state.teamRoster.map(function(player, i) {
                    return (
                      <div key={i} className="columns small-6 medium-3">
                        <div className="callout" data-equalizer-watch>
                          <h4>{player.firstName} {player.lastName}, {player.position}</h4>
                          <p><strong>Age</strong>: {player.age}, <strong>College</strong>: {player.college}, <strong>Overall</strong>: {player.playerBestOvr}</p>
                        </div>
                      </div>
                    )
                  })}
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
                  <li>Break team select into separate component
                    <ul>
                      <li>Can use TeamSelect component</li>
                      <li>Need to use some sort of state control like Flux, Redux for one component updating the state of another component</li>
                    </ul>
                  </li>
                  <li>Break player card into separate component
                    <ul>
                      <li>Need to get team state from parent component</li>
                      <li>Can use teamID</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Teams;
