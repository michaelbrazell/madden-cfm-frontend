var React = require('react');

var TeamSelect = React.createClass({
  render: function () {
    return (
      <option key={this.props.key} value={this.props.abbrName}>{this.props.combinedName}</option>
    )
  }
});

module.exports = TeamSelect;
