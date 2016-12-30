var React = require('react');
var data = require('json!teamStandingsInfoList');

var Standings = React.createClass({
  getInitialState: function() {
    /* Modify data to structure teams into divisions */
    var groups = {};
    for(var i = 0; i < data.length; i++) {
      var item = data[i];
      if(!groups[item.divisionName]) {
          groups[item.divisionName] = [];
      }
      groups[item.divisionName].push({
          teamName: item.teamName,
          wins: item.totalWins,
          losses: item.totalLosses,
          ties: item.totalTies
      });
    }
    /* Build array out of group (division) data */
    var result = [];
    for(var x in groups) {
      if(Object.prototype.hasOwnProperty.call(groups, x)) {
          var obj = {};
          obj[x] = groups[x];
          result.push(obj);
      }
    }
    // Pass division data to the state
    return { result }
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
          {this.state.result.map(function(division, i){
            return (
              <div key={i} className="columns small-12 medium-6">
                {Object.keys(division).map(function(key, i) {
                  var divisionTeams = division[key];
                    return (
                      <div className="division-table" key={i}>
                        <h3>{key}</h3>
                        <table className="tablesorter">
                          <thead>
                            <tr>
                              <th width="55%"></th>
                              <th width="15%">W</th>
                              <th width="15%">L</th>
                              <th width="15%">T</th>
                            </tr>
                          </thead>
                          <tbody>
                          {divisionTeams.map(function(teams, i){
                            return (
                              <tr key={i}>
                                <td>{teams.teamName}</td>
                                <td>{teams.wins}</td>
                                <td>{teams.losses}</td>
                                <td>{teams.ties}</td>
                              </tr>
                            )
                          })}
                          </tbody>
                        </table>
                      </div>
                    )
                })}
              </div>
            )
          })}
        </div>
        <p>To do:</p>
        <ul>
          <li>No to do's for now</li>
        </ul>
      </div>
    );
  }
})

module.exports = Standings;
