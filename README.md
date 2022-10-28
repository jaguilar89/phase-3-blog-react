# Phase 3 Project
This is my Phase 3 project for Flatiron School's Software Engineering program. It is a simple blog written as a full stack web application using a React frontend and a Sinatra backend.
You can create a blog post as well as post comments on an individual blog post, all of which are stored in a local SQLite database and interface with the frontend via Sinatra.

## Technologies
- React
- Semantic UI
- Sinatra
- SQLite

## Installation and Usage
### Front end
- [Fork this repository](https://github.com/jaguilar89/phase-3-blog-react/fork) and clone it to a local directory on your computer.

```bash
$ git clone git@github.com:*username*/phase-3-blog-react.git
```

- `cd` into the repository and install the required dependencies

```bash
$ npm install
```

- Start the app
  
```bash
$ npm start
```
The app runs on port 3000 by default, you can view the page by going to http://localhost:3000 in your browser.

### Back end
- [Fork the repository](https://github.com/jaguilar89/phase-3-blog-sinatra/fork) for the Sinatra back end and clone it to a local directory on your computer.
  
```bash
$ git clone git@github.com:*username*/phase-3-blog-sinatra.git
```

- `cd` into the repository and install the required gems

```bash
$ bundle install
```
- Seed the local database with some example data

```bash
$ bundle rake db:seed
```

- Start the server

```bash
$ bundle exec rake server
```

The server will run on port 9292 on http://localhost:9292

- Refresh the browser to update the page with the seeded data.


