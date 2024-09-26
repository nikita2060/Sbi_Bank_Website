require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
//json data
const githubData = {
    "login": "nikita2060",
    "id": 94976186,
    "node_id": "U_kgDOBak4ug",
    "avatar_url": "https://avatars.githubusercontent.com/u/94976186?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nikita2060",
    "html_url": "https://github.com/nikita2060",
    "followers_url": "https://api.github.com/users/nikita2060/followers",
    "following_url": "https://api.github.com/users/nikita2060/following{/other_user}",
    "gists_url": "https://api.github.com/users/nikita2060/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nikita2060/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nikita2060/subscriptions",
    "organizations_url": "https://api.github.com/users/nikita2060/orgs",
    "repos_url": "https://api.github.com/users/nikita2060/repos",
    "events_url": "https://api.github.com/users/nikita2060/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nikita2060/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Nikita Pandey",
    "company": null,
    "blog": "",
    "location": "Banglore,India",
    "email": null,
    "hireable": null,
    "bio": "Machine Learning Enthusiast eager to collaborate, learn, and create impact !\r\n\r\n\r\n",
    "twitter_username": null,
    "public_repos": 23,
    "public_gists": 0,
    "followers": 11,
    "following": 12,
    "created_at": "2021-11-24T14:10:59Z",
    "updated_at": "2024-09-24T12:28:34Z"
  }

app.get('/',(req,res)=>{
    res.send('Hello World !')
});

app.get('/youtube',(req,res)=>{
    res.send('Hello Youtube World !')
});

app.get('/login',(req,res)=>{
    res.send('Please login')
})

//responding in json format
app.get('/github',(req,res)=>{
    
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
});