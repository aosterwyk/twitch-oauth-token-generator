let fullUrl = window.location.hash.substring(1);
let accessToken = (fullUrl.substring(fullUrl.search('#'), fullUrl.search('&'))).replace('access_token=', '');

console.log(accessToken);
// document.getElementById('token').innerHTML = `Token:<br /><code id="tokenCodeBlock">${accessToken}</code>`;
document.getElementById('token').innerHTML = `Token:<br /><code class="text-info" id="tokenCodeBlock">${accessToken}</code></span><br />`;

// output example
// https://acceptdefaults.com/twitch-oauth-token/
// #access_token=TOKEN
// &scope=channel%3Amoderate+chat%3Aedit+chat%3Aread+channel%3Aread%3Aredemptions&token_type=bearer

function copyToken () {
    let copyThis = document.getElementById('tokenCodeBlock');
    let copyButton = document.getElementById('copyButton');    
    navigator.clipboard.writeText(copyThis.innerText);
    copyButton.classList.remove('btn-info');
    copyButton.classList.add('btn-success');
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg> Copied!`;
}
