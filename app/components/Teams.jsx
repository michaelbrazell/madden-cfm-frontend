var React = require('react');
// var TeamSelect = require('TeamSelect');
var teamData = require('json!leagueTeamInfoList');

var Teams = React.createClass({
  getInitialState: function () {
    var teamList = {};
    return {
      team: 'Choose a Team',
      teamList: teamData
    }
  },
  updateRoster: function (e) {
    this.setState({
      team: e.target.value
    })
  },
  render: function() {
    console.log(this.state.teamList);
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
                    {this.state.teamList.map(function(team, i) {
                      return (
                        <option key={i} value={team.cityName +' '+team.displayName}>{team.cityName} {team.displayName}</option>
                      )
                    })}
                  </select>
                </div>
            </div>
            <div className="row">
              <div className="columns small-12">
                <ul>
                  <li>Team Names list</li>
                </ul>
                <p>To do:</p>
                <ul>
                  <li>Populate Rosters</li>
                  <li>Break team select into separate component
                    <ul>
                      <li>Can use TeamSelect component</li>
                      <li>Need to use some sort of state control like Flux, Redux for one component updating the state of another component</li>
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
