// import axios from 'axios';
// import { NextResponse } from 'next/server';
// import { OtakuDesuScraper } from '../../backend/search';

// export default async function handler(req, res) {
//     const { query } = req.query;
//     console.log("Received query:", query);
//     const scraper = new OtakuDesuScraper();
  
//     try {
//       console.log("Starting search...");
//       const results = await scraper.search(query);
//       console.log("Search completed. Results:", results);
//       res.status(200).json(results);
//     } catch (error) {
//       console.error("Search failed:", error);
//       res.status(500).json({ error: 'Error fetching data', details: error.message, stack: error.stack });
//     }
//   }