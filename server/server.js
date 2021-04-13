const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');
const SpotifyWebApi = require("spotify-web-api-node");
const lyricFinder = require("lyrics-finder");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "22cbee74aa08443ead9848b61699cd35",
    clientSecret: "cb053d2d5c5a4da69b5a453724b2bb95",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "22cbee74aa08443ead9848b61699cd35",
    clientSecret: "cb053d2d5c5a4da69b5a453724b2bb95",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.get('/lyrics', async (req,res)=>{
  const lyrics = await lyricFinder(req.query.artist, req.query.track) || "No lyrics found"
  res.json({lyrics})
})

app.listen(3001);
