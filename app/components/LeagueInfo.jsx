var React = require('react');
var TeamCard = require('TeamCard');

var LeagueInfo = React.createClass({
  render: function() {
    return (
      <div>
        <h1>League Overview</h1>
        <h2>Teams</h2>
        <div className="row">
          <TeamCard />
        </div>
        <p>To do:</p>
        <ul>
          <li>Use axios to pull data from Firebase</li>
          <li>Link up teams
            <ul>
              <li>Look into adding rosters</li>
              <li>Dyanmic team routes</li>
            </ul>
          </li>
          <li>Add logos to cards</li>
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
