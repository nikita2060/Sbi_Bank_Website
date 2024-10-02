import express from 'express';
import { config } from 'dotenv';

config();  // Load environment variables

const app = express();
const port = 3000;

app.get('/colleges', (req, res) => {
    const colleges = [
        {
            "rank": 1,
            "name": "Indian Institute of Technology (IIT) Madras",
            "fees": "₹ 2-2.5 Lakhs per year",
            "placement_status": "80-90% placement rate, average package ₹ 15-20 LPA"
        },
        {
            "rank": 2,
            "name": "Indian Institute of Technology (IIT) Delhi",
            "fees": "₹ 2-2.5 Lakhs per year",
            "placement_status": "85-90% placement rate, average package ₹ 15-20 LPA"
        },
        {
            "rank": 3,
            "name": "Indian Institute of Technology (IIT) Bombay",
            "fees": "₹ 2-2.5 Lakhs per year",
            "placement_status": "85-95% placement rate, average package ₹ 18-22 LPA"
        },
        // ... more colleges
    ];

    // Send JSON response
    res.json(colleges);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
