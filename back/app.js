const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000; 

app.get('/characters' , async(req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch'});
    }
});

app.get('/characters/:name', async(req,res) => {
    const {name} =req.params;
    try {
        const response =await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Could not find character'});
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});