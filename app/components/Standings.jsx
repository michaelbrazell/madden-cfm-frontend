var React = require('react');
var data = require('json!../../public/data/teamStandingInfoList.json');

var Standings = React.createClass({
  getInitialState: function() {
    var teams = data;
    return { teams } ;
    var playoffStatus = function () {
      if (team.playoffStatus === '4') {
        console.log('Homefield throughout');
      }
    }
  },
  componentDidMount: function() {
    $(".tablesorter").tablesorter({
      sortList: [[1,1],[2,0]]
    });

  },
  render: function() {
    return (
      <div>
        <h1>Standings</h1>
        <div className="row">
          <div className="columns small-12 medium-6">
            <h2>AFC</h2>
            <h3>East</h3>
            <div className="scroll">
              <table className="tablesorter" id="afc-east">
                <thead>
                  <tr>
                    <th></th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    if (team.divisionName === 'AFC East') {
                      return (
                        <tr>
                          <td>{team.teamName} ({team.playoffStatus})</td>
                          <td>{team.totalWins}</td>
                          <td>{team.totalLosses}</td>
                          <td>{team.totalTies}</td>
                        </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
            </div>
            <h3>North</h3>
              <table className="tablesorter" id="afc-north">
                <thead>
                  <tr>
                    <th></th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    if (team.divisionName === 'AFC North') {
                      return (
                         <tr>
                           <td>{team.teamName} ({team.playoffStatus})</td>
                           <td>{team.totalWins}</td>
                           <td>{team.totalLosses}</td>
                           <td>{team.totalTies}</td>
                         </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
            <h3>South</h3>
              <table className="tablesorter" id="afc-south">
                <thead>
                  <tr>
                    <th></th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    if (team.divisionName === 'AFC South') {
                      return (
                         <tr>
                           <td>{team.teamName} ({team.playoffStatus})</td>
                           <td>{team.totalWins}</td>
                           <td>{team.totalLosses}</td>
                           <td>{team.totalTies}</td>
                         </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
            <h3>West</h3>
              <table className="tablesorter" id="afc-west">
                <thead>
                  <tr>
                    <th></th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    if (team.divisionName === 'AFC West') {
                      return (
                         <tr>
                           <td>{team.teamName} ({team.playoffStatus})</td>
                           <td>{team.totalWins}</td>
                           <td>{team.totalLosses}</td>
                           <td>{team.totalTies}</td>
                         </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
          </div>
          <div className="columns small-12 medium-6">
            <h2>NFC</h2>
            <h3>East</h3>
              <table className="tablesorter" id="nfc-east">
                <thead>
                  <tr>
                    <th></th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    if (team.divisionName === 'NFC East') {
                      return (
                         <tr>
                           <td>{team.teamName} ({team.playoffStatus})</td>
                           <td>{team.totalWins}</td>
                           <td>{team.totalLosses}</td>
                           <td>{team.totalTies}</td>
                         </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
            <h3>North</h3>
              <table className="tablesorter" id="nfc-north">
                <thead>
                  <tr>
                    <th></th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    if (team.divisionName === 'NFC North') {
                      return (
                         <tr>
                           <td>{team.teamName} ({team.playoffStatus}) </td>
                           <td>{team.totalWins}</td>
                           <td>{team.totalLosses}</td>
                           <td>{team.totalTies}</td>
                         </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
            <h3>South</h3>
              <table className="tablesorter" id="nfc-south">
                <thead>
                  <tr>
                    <th></th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    if (team.divisionName === 'NFC South') {
                      return (
                         <tr>
                           <td>{team.teamName} ({team.playoffStatus})</td>
                           <td>{team.totalWins}</td>
                           <td>{team.totalLosses}</td>
                           <td>{team.totalTies}</td>
                         </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
            <h3>West</h3>
              <table className="tablesorter" id="nfc-west">
                <thead>
                  <tr>
                    <th></th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    if (team.divisionName === 'NFC West') {
                      return (
                         <tr>
                           <td>{team.teamName} ({team.playoffStatus})</td>
                           <td>{team.totalWins}</td>
                           <td>{team.totalLosses}</td>
                           <td>{team.totalTies}</td>
                         </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
          </div>
        </div>
        <p>To do:</p>
        <ul>
          <li>Break individual tables into their own divisionalStandings component</li>
        </ul>
      </div>
    );
  }
})

module.exports = Standings;
