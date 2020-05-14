let fullUrl = window.location.hash.substring(1);
let accessToken = (fullUrl.substring(fullUrl.search('#'), fullUrl.search('&'))).replace('access_token=', '');

console.log(accessToken);
document.getElementById('token').innerHTML = `Token:<br /><code>${accessToken}</code>`;

// output example
// https://acceptdefaults.com/twitch-oauth-token/
// #access_token=TOKEN
// &scope=channel%3Amoderate+chat%3Aedit+chat%3Aread+channel%3Aread%3Aredemptions&token_type=bearer
