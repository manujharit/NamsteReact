const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Define a route to act as your CORS proxy
app.get('/proxy', async (req, res) => {
  try {
    const url = req.query.url
    if (!url) {
      throw new Error('URL parameter is missing');
    }
    // console.log('Calling', url)
    // Fetch data from the specified URL
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
      }
    });

    // Send the response back to the client
    const data = await response.json()
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // console.log(res)
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});