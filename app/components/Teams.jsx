var React = require('react');
var data = require('json!../../public/data/teamStandingInfoList.json');

var Teams = React.createClass({
  getInitialState: function () {
    return {
      team: '49ers'
    }
  },
  updateRoster: function (e) {
    this.setState({
      team: e.target.value
    })
  },
  render: function() {
    return (
      <div className="row">
        <div className="columns small-12">
          <h1>Team Rosters</h1>
            <div className="row">
              <div className="columns small-12 medium-6">
                <h2>Teams - {this.state.team}</h2>
              </div>
                <div className="columns small-12 medium-6">
                  {/* This should be a component that maintains its own state */}
                  <select onChange={this.updateRoster}>
                    <option value="49ers">49ers</option>
                    <option value="Rams">Rams</option>
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
                  <li>Make select choice its own component</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Teams;
