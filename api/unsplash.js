const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

  if (!UNSPLASH_ACCESS_KEY) {
    return res.status(500).json({ error: 'Unsplash API key is not configured.' });
  }

  const API_URL = `https://api.unsplash.com/photos/random?count=12&query=travel&client_id=${UNSPLASH_ACCESS_KEY}`;

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Unsplash API Error:', errorBody);
      return res.status(response.status).json({ error: `Unsplash API error: ${response.statusText}` });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching from Unsplash:', error);
    res.status(500).json({ error: 'Failed to fetch data from Unsplash.' });
  }
};
