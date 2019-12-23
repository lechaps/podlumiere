# podlumiere

website source of www.podlumiere.com, a very nice podcast !

## Installation

Website made with Hugo (www.gohugo.io)

- Install Hugo
- Download sources
- Run Hugo

In order to see your site in action, run Hugo's built-in local server.
```
$ hugo server
```
Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

## CI & Deploy [![CircleCI](https://circleci.com/gh/lechaps/podlumiere.svg?style=svg)](https://circleci.com/gh/lechaps/podlumiere)

Powered by **https://www.circleci.com**

## Configuration

First, let's take a look at the **config.toml**. It will be useful to learn how to customize your site. Feel free to play around with the settings.

### Comments

The optional comments system is powered by [Disqus](https://disqus.com). If you want to enable comments, create an account in Disqus and write down your shortname in the config file.
```toml
disqusShortname = "your-disqus-short-name"
```
You can disable the comments system by leaving the `disqusShortname` empty.

### Google Analytics

You can optionally enable Google Analytics. Type your tracking code in the ``.
```toml
googleAnalytics = "UA-XXXXX-X"
```
Leave the `googleAnalytics` key empty to disable it.

## License

This port is released under the MIT License.
