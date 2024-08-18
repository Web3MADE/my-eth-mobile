// src/index.ts

import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Express server!");
});

// Route to fetch ETH price data from Binance API
app.get("/eth-price", async (req: Request, res: Response) => {
  try {
    console.log("Fetching ETH price data...");
    const response = await fetch(
      "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
    );
    const data = await response.json();
    console.log("ETH price response:", data);
    // const ethPrice = response.data.price;
    res.json({ price: data });
  } catch (error) {
    console.error("Error fetching ETH price:", error);
    res.status(500).json({ error: "Failed to fetch ETH price data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
