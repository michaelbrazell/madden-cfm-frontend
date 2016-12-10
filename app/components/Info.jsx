var React = require('react');

var LeagueInfo = (props) => {
  return (
    <div>
      <h1>Main App Rendered</h1>
      <p>This is the main.jsx component.  This page is going to have:L</p>
      <ul>
        <li>Team overview divided up by conference</li>
        <li>List of user teams</li>
      </ul>
      <p>To do:</p>
      <ul>
        <li>Restructure this page so that it has a Nav component</li>
        <li>Restructure so that the standings page belongs to this component
          <ul>
            <li>Fix app.jsx so that it doesn't have to require standings, once standings is pulled in as a prop of Main.jsx</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

module.exports = LeagueInfo;
