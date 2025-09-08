export default function handler(req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.send(`
    const PEXELS_API_KEY = "${process.env.PEXELS_API_KEY}";
    const UNSPLASH_ACCESS_KEY = "${process.env.UNSPLASH_ACCESS_KEY}";
  `);
}
