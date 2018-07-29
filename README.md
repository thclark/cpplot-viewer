
<a href="#">
   <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" height="48">
   <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="48">
   <img src="https://steemitimages.com/0x0/https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-marketing-pages/images/new-branding/logo/images/plotly-logo-01-stripe%402x.png" height="48">
</a>

[![npm](https://img.shields.io/npm/v/cpplot-viewer.svg)](https://www.npmjs.com/package/cpplot-viewer)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![Build Status](https://travis-ci.com/thclark/cpplot-viewer.svg?branch=master)](https://travis-ci.com/thclark/cpplot-viewer)

Browser based figure viewer. Save plotly figures (in `json` format) to *.json files from any language, and use this tool to view them in your browser.

## Quick start

You don't need to clone this repo, or run your own server, or ANYTHING.

1. Download some or all of the example figure files to a folder on your local pc:
 - [example_mandelbrot.json]()
 - [example_bar.json]()

2. Open your browser (preferably chrome) and navigate to [https://cpplot.herokuapp.com/](https://cpplot.herokuapp.com/).

3. Select the local folder in the webapp, and bask in the glory of your interactive figures.

4. **Note: Your figures and associated data are always kept locally, never uploaded to a server.**

Of course, if you want to adapt, re-use, collaborate, improve this tool - knock yourself out. I'm open to (high quality) pull requests.

## Background

This was built as a partner tool for the [cpplot](https://github.com/thclark/cpplot) library. But it works with *.json figures that can be written from any language (e.g. those like Python and MATLAB which already have plotly clients)

I wanted C++ to be as easy to use as MATLAB or Python for prototyping algorithms, plotting data and rendering charts/figures of all sorts.

In fact, I wanted it to be *better*. And I think `plotly.js`:
 - Produces much nicer looking figures than MATLAB, matplotlib, tecplot, gnu offerings, etc
 - Gives much better figure export offerings (like SVG) for creating publication quality graphics easily
 - Is way more cross-language and cross-system compatible than any of the other plotting tools, because the json schema is open and universally accessible.

### Why not plotly online?

Although plotly.js at its core is a totally brilliant library, the online services can be a bit of a quagmire to use - the APIs and client SDKs are documented, but honestly it's difficult to navigate and there are very few good examples out there. It requires quite a lot of expertise these days to just create a single figure over the API.

It gets worse if you need to keep data locally - you end up needing to install the enterprise solution etc etc.

So what we have here is a really lightweight alternative, allows you to quickly chop together figures showing your data, then interactively plot and export for publication etc.

You can share your figures with your colleagues as files, generate those files from any language that will write valid JSON, version control them if you need, and always keep data locally.

Of course, for groups collaborating using plotly, or using hte excellent dashboarding tools, there's nothing to stop you from taking the exact same data and POSTing it to Plotly Online! :)

## Develop, build and deploy

So you want to fork and change this, then deploy so you and your colleagues can usee the updated version?

Simple. Make your changes to your own fork, navigate to this README on github, and click the `deploy` button below. It's free. Simples.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## With great thanks to...

The original `plotly.js` library authors and maintainers. You talented people have produced what I think is the best charting library on the planet bar none.

@transitive-bullshit for this [`create-react-library`](https://github.com/transitive-bullshit/create-react-library), a great tool for quickly boilerplating npm modules.

