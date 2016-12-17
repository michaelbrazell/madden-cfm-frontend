var React = require('react');
var {Link, IndexLink} = require('react-router'); // Destructured ES6, require('react-router').link;

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="row">
          <div className="columns small-12">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">Madden CFM</li>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Home</IndexLink></li>
                <li><Link to="/standings" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Standings</Link></li>
                <li><Link to="/team-stats" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Team Stats</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
