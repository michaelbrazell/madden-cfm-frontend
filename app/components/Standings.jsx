var React = require('react');
var data = require('json!../../public/data/teamStandingInfoList.json');

var Standings = React.createClass({
  getInitialState: function() {
    // var teams = data;

    var groups = {};
    for(var i = 0; i < data.length; i++) {
      var item = data[i];

      if(!groups[item.conferenceName]) {
          groups[item.conferenceName] = [];
      }

      groups[item.conferenceName].push({
          teamName: item.teamName,
          wins: item.totalWins,
          losses: item.totalLosses,
          ties: item.totalTies
      });
    }

    var result = [];

    for(var x in groups) {
      if(Object.prototype.hasOwnProperty.call(groups, x)) {
          var obj = {};
          obj[x] = groups[x];
          result.push(obj);
      }
    }

    console.log(result);
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
          <div className="columns small-12">
            <h2>Total Teams</h2>
              {this.state.result.map(function(conference, i){
                console.log(conference)
                      return (
                        <div key={i}>
                            {Object.keys(conference).map(function(key) {
                              var conferenceTeams = conference[key];
                              console.log('Conference as Key: ' + key)
                              console.log('Teams belonging to Key as value ' + conferenceTeams)
                                return (
                                  <div>
                                    <h4>Conference: {key}</h4>
                                    {conferenceTeams.map(function(teams){
                                      console.log(teams.teamName);
                                      return (
                                        <h5>{teams.teamName}</h5>
                                      )
                                    })}

                                  </div>
                                )
                            })}
                        </div>



                      )

                  })}
          </div>
        </div>
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
