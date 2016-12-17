var React = require('react');
var data = require('json!../../public/data/teamStandingInfoList.json');

var TeamStats = React.createClass({
  getInitialState: function() {
    var teams = data;
    return { teams } ;
  },
  componentDidMount: function() {
    $(".tablesorter").tablesorter({
      sortList: [[1,0],[2,0]]
    });
  },
  render: function() {
    return (
      <div>
        <h1>Team Statistics</h1>
        <div className="row">
          <div className="columns small-12 medium-12">
            <div className="scroll">
              <table className="tablesorter" id="afc-east">
                <thead>
                  <tr>
                    <th></th>
                    <th>Ranking</th>
                    <th>Record</th>
                    <th>Total Yards</th>
                    <th>Passing Yards</th>
                    <th>Rushing Yards</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    return (
                      <tr>
                        <td>{team.teamName}</td>
                        <td>{team.rank}</td>
                        <td>{team.totalWins} - {team.totalLosses} - {team.totalTies}</td>
                        <td>{team.offTotalYds} ({team.offTotalYdsRank})</td>
                        <td>{team.offPassYds} ({team.offPassYdsRank})</td>
                        <td>{team.offRushYds} ({team.offRushYdsRank})</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = TeamStats;
