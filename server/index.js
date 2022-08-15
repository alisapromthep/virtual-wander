const express = require('express');
const app = express();
// const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
// const uniqid = require('uniqid');

require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world"); 
});

function readVideos() {
    const videoFile = fs.readFileSync('./data/videos.json');
    const videoData = JSON.parse(videoFile);
    return videoData;
}

app.get('/videos', (req, res) => {
    const videosData = readVideos();

    res.json(videosData);
});


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});