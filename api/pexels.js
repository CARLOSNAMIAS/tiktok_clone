const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { query, page = 1, per_page = 5 } = req.query;
  const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

  if (!PEXELS_API_KEY) {
    return res.status(500).json({ error: 'Pexels API key is not configured.' });
  }

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required.' });
  }

  const API_URL = `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=${per_page}&page=${page}`;

  try {
    const response = await fetch(API_URL, {
      headers: { Authorization: PEXELS_API_KEY },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Pexels API Error:', errorBody);
      return res.status(response.status).json({ error: `Pexels API error: ${response.statusText}` });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching from Pexels:', error);
    res.status(500).json({ error: 'Failed to fetch data from Pexels.' });
  }
};
