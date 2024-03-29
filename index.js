require("dotenv").config(); 
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "ar-chit",
  id: 72187362,
  node_id: "MDQ6VXNlcjcyMTg3MzYy",
  avatar_url: "https://avatars.githubusercontent.com/u/72187362?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ar-chit",
  html_url: "https://github.com/ar-chit",
  followers_url: "https://api.github.com/users/ar-chit/followers",
  following_url: "https://api.github.com/users/ar-chit/following{/other_user}",
  gists_url: "https://api.github.com/users/ar-chit/gists{/gist_id}",
  starred_url: "https://api.github.com/users/ar-chit/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ar-chit/subscriptions",
  organizations_url: "https://api.github.com/users/ar-chit/orgs",
  repos_url: "https://api.github.com/users/ar-chit/repos",
  events_url: "https://api.github.com/users/ar-chit/events{/privacy}",
  received_events_url: "https://api.github.com/users/ar-chit/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2020-10-01T06:32:36Z",
  updated_at: "2024-03-07T02:12:45Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("architsehgal123");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Yt</h2>");
});

app.get("/github", (req, res) => { 
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
