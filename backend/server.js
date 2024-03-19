const express = require('express');
const cors = require('cors'); // Import cors middleware
const app = express();
const port = 5000; // Choose any port you like

// Use cors middleware
app.use(cors());

// Define your data
const data = [
  {
    id: 1,
    productName: "Italian Basil",
    imageSrc: "",
    productLink: "commodities-1",
    wholesalePrice: "₹33.80",
    retailPrice: "₹52.00",
    weeksHigh: "₹59.00",
    weeksLow: "₹47.00",
    trend: ""
  },
  {
    id: 2,
    productName: "Swiss Chard",
    wholesalePrice: "₹31.20",
    retailPrice: "₹48.00",
    weeksHigh: "₹59.00",
    weeksLow: "₹48.00",
    trend: ""
  },
  {
    id: 3,
    productName: "Broccoli",
    wholesalePrice: "₹29.90",
    retailPrice: "₹46.00",
    weeksHigh: "₹59.00",
    weeksLow: "₹46.00",
    trend: ""
  },
  {
    id: 4,
    productName: "Kale",
    wholesalePrice: "₹33.15",
    retailPrice: "₹51.00",
    weeksHigh: "₹57.00",
    weeksLow: "₹46.00",
    trend: ""
  },
  {
    id: 5,
    productName: "Celery",
    wholesalePrice: "₹29.90",
    retailPrice: "₹46.00",
    weeksHigh: "₹57.00",
    weeksLow: "₹46.00",
    trend: ""
  },
  {
    id: 6,
    productName: "Rosemary",
    wholesalePrice: "₹37.05",
    retailPrice: "₹57.00",
    weeksHigh: "₹57.00",
    weeksLow: "₹52.00",
    trend: ""
  },
  {
    id: 7,
    productName: "Pak Choi",
    wholesalePrice: "₹37.70",
    retailPrice: "₹58.00",
    weeksHigh: "₹58.00",
    weeksLow: "₹51.00",
    trend: ""
  },
  {
    id: 8,
    productName: "Asparagus",
    wholesalePrice: "₹179.40",
    retailPrice: "₹276.00",
    weeksHigh: "₹285.00",
    weeksLow: "₹276.00",
    trend: ""
  },
  {
    id: 9,
    productName: "Thyme",
    wholesalePrice: "₹76.05",
    retailPrice: "₹117.00",
    weeksHigh: "₹129.00",
    weeksLow: "₹117.00",
    trend: ""
  },
  {
    id: 10,
    productName: "Broccoli Florets",
    wholesalePrice: "₹120.25",
    retailPrice: "₹185.00",
    weeksHigh: "₹190.00",
    weeksLow: "₹180.00",
    trend: ""
  },
  {
    id: 11,
    productName: "Lollo Rossa",
    wholesalePrice: "₹36.40",
    retailPrice: "₹56.00",
    weeksHigh: "₹72.00",
    weeksLow: "₹49.00",
    trend: ""
  },
  {
    id: 12,
    productName: "Red Oak Lettuce",
    wholesalePrice: "₹35.10",
    retailPrice: "₹54.00",
    weeksHigh: "₹56.00",
    weeksLow: "₹46.00",
    trend: ""
  },
  {
    id: 13,
    productName: "Green Butterhead Lettuce",
    wholesalePrice: "₹35.75",
    retailPrice: "₹55.00",
    weeksHigh: "₹55.00",
    weeksLow: "₹47.00",
    trend: ""
  },
  {
    id: 14,
    productName: "Romaine Lettuce",
    wholesalePrice: "₹34.45",
    retailPrice: "₹53.00",
    weeksHigh: "₹53.00",
    weeksLow: "₹46.00",
    trend: ""
  },
  {
    id: 15,
    productName: "Tulsi",
    wholesalePrice: "₹52.00",
    retailPrice: "₹80.00",
    weeksHigh: "₹80.00",
    weeksLow: "₹63.00",
    trend: ""
  },
  {
    id: 16,
    productName: "Leeks",
    wholesalePrice: "₹51.35",
    retailPrice: "₹79.00",
    weeksHigh: "₹97.00",
    weeksLow: "₹79.00",
    trend: ""
  },
  {
    id: 17,
    productName: "Mint",
    wholesalePrice: "₹21.45",
    retailPrice: "₹33.00",
    weeksHigh: "₹38.00",
    weeksLow: "₹31.00",
    trend: ""
  },
  {
    id: 18,
    productName: "Amaranthus",
    wholesalePrice: "₹23.40",
    retailPrice: "₹36.00",
    weeksHigh: "₹39.00",
    weeksLow: "₹32.00",
    trend: ""
  },
  {
    id: 19,
    productName: "Palak",
    wholesalePrice: "₹44.85",
    retailPrice: "₹69.00",
    weeksHigh: "₹70.00",
    weeksLow: "₹60.00",
    trend: ""
  },
  {
    id: 20,
    productName: "Amaranthus green",
    wholesalePrice: "₹51.35",
    retailPrice: "₹79.00",
    weeksHigh: "₹79.00",
    weeksLow: "₹61.00",
    trend: ""
  },
  {
    id: 21,
    productName: "Colocasia Leaf",
    wholesalePrice: "₹71.50",
    retailPrice: "₹110.00",
    weeksHigh: "₹123.00",
    weeksLow: "₹106.00",
    trend: ""
  },
  {
    id: 22,
    productName: "Methi",
    wholesalePrice: "₹40.95",
    retailPrice: "₹63.00",
    weeksHigh: "₹83.00",
    weeksLow: "₹63.00",
    trend: ""
  },
  {
    id: 23,
    productName: "Drumstick",
    wholesalePrice: "₹48.10",
    retailPrice: "₹74.00",
    weeksHigh: "₹78.00",
    weeksLow: "₹63.00",
    trend: ""
  },
  {
    id: 24,
    productName: "Green Coral",
    wholesalePrice: "₹56.55",
    retailPrice: "₹87.00",
    weeksHigh: "₹91.00",
    weeksLow: "₹72.00",
    trend: ""
  },
  {
    id: 25,
    productName: "Simpson Lettuce",
    wholesalePrice: "₹53.95",
    retailPrice: "₹83.00",
    weeksHigh: "₹109.00",
    weeksLow: "₹83.00",
    trend: ""
  }
];
const ITEMS_PER_PAGE = 10;

app.get('/api/data', (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const startIndex = (page - 1) * ITEMS_PER_PAGE; 
  const endIndex = startIndex + ITEMS_PER_PAGE; 
  const totalItems = data.length; 

  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  res.json({ data: paginatedData, totalPages });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});