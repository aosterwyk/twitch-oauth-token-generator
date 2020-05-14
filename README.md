#  twitch-oauth-token-generator
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/varixx/twitch-oauth-token-generator?sort=semver) ![GitHub last commit](https://img.shields.io/github/last-commit/varixx/twitch-oauth-token-generator) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/varixx/twitch-oauth-token-generator/dev?label=last%20commit%20%28dev%29) ![Discord](https://img.shields.io/discord/90687557523771392?color=000000&label=%20&logo=discord) ![Twitch Status](https://img.shields.io/twitch/status/varixx?label=%20&logo=twitch) 

This is a very simple oauth token generator/landing page for twitch. It may eventually take input and generate a request URL for the first step. 

Note: You can use my URL (`https://acceptdefaults.com/twitch-oauth-token-generator/`) for your application but this is a very bad idea. Tokens are essentially passwords for your Twitch applications. Although I **do not store** these tokens you have no way to verify this.

## Installation

- Download or clone the repo to a webserver 

## Usage

- You will need to add your redirect URL (or `https://acceptdefaults.com/twitch-oauth-token-generator/`) to your application in the [Twitch Dev Console](https://dev.twitch.tv/console).
- Add your client id, redirect URL and [scopes](https://dev.twitch.tv/docs/authentication#scopes) in the request URL format below
- You will be redirected to a page with a client ID with your token.

Request URL format:
`https://id.twitch.tv/oauth2/authorize?client_id=<YOUR CLIENT ID>&redirect_uri=<YOUR redirect URL>&response_type=token&scope=<scopes>` 

## Support
[Discord server](https://discord.gg/QNppY7T) or DM `VariXx#8317`

VariXx on [twitter](https://twitter.com/VariXx) or [github](https://github.com/varixx/). I do not check these two very often.  

## License
[MIT](https://choosealicense.com/licenses/mit/)

