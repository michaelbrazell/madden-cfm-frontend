var React = require('react');

var TeamSelect = React.createClass({
  render: function () {
    return (
      <select onChange={this.updateRoster}>
        <option value="49ers">49ers</option>
        <option value="Rams">Rams</option>
      </select>
    );
  }
});

module.exports = TeamSelect;
