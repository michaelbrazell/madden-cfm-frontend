/* To DO:
- This uses promise API to pass the json back to getDate.
- Go to TamCard.jsx and call GetLeagueInfo.getData().then(function (response) {
 setState...
 Assign teams =  whatever that sGetLeagueInfo.getData() gives you...
 }
 */
var axios = require('axios');

const MADDEN_CFM_LEAGUE_INFO = 'https://madden-cfm-exporter.firebaseio.com/data/-KYWiLyQnH2HgWLxd-Zb.json';

module.exports = {
  getData: function () {
    var requestUrl = `${MADDEN_CFM_LEAGUE_INFO}`;
    // Axios Service request using promises
    axios.get(requestUrl).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }
}
