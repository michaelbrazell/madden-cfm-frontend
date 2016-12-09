var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns small-12 medium-6 large-6 small-centered">
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
            <li>Use the index router instead to display the team info on this main page
              <ul>
                <li>Create index route in app.jsx</li>
                <li>Create component for team info / league info</li>
                <li>Set league info as default content for this page</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
