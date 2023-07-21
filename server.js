const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 3000; // Choose any port you prefer

// Database connection
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432, // Default PostgreSQL port
  database: "farmers_db",
});

// Middleware
app.use(bodyParser.json());

// Insertion endpoint
app.post("/farmers", async (req, res) => {
  const newFarmer = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO farmers (first_name, last_name, phone_number, age, address, crops) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      [
        newFarmer.first_name,
        newFarmer.last_name,
        newFarmer.phone_number,
        newFarmer.age,
        newFarmer.address,
        newFarmer.crops,
      ]
    );

    console.log("Inserted farmer with ID:", result.rows[0].id);
    res.status(201).json({
      status: "success",
      message: `Farmer with id: ${result.rows[0].id} has been created successfully!!!`,
    });
  } catch (err) {
    console.error("Error inserting farmer:", err);
    res.status(500).json({ error: "Failed to insert farmer" });
  }
});

// Retrieval endpoint
app.get('/farmers', async (req, res) => {
  const { fields, min_age, max_age, ...filters } = req.query;
  console.log(filters, "filters");

  let sql = 'SELECT ';
  if (fields) {
    const selectedFields = fields.split(',').map((field) => field.trim());
    sql += selectedFields.join(', ');
  } else {
    sql += '*';
  }

  sql += ' FROM farmers';

  const filterKeys = Object.keys(filters);
  if (filterKeys.length > 0 || min_age || max_age) {
    sql += ' WHERE';
    let isFirstFilter = true;

    if (min_age && max_age) {
      sql += ` age BETWEEN ${min_age} AND ${max_age}`;
      isFirstFilter = false;
    } else if (min_age) {
      sql += ` age >= ${min_age}`;
      isFirstFilter = false;
    } else if (max_age) {
      sql += ` age <= ${max_age}`;
      isFirstFilter = false;
    }

    filterKeys.forEach((filterKey) => {
      const filterValue = filters[filterKey];
      if (!isFirstFilter) {
        sql += ' AND';
      }

      if (filterKey === 'crops') {
        sql += ` crops LIKE '%${filterValue}%'`;
      } else {
        sql += ` ${filterKey} = '${filterValue}'`;
      }

      isFirstFilter = false;
    });
  }

  try {
    const result = await pool.query(sql);
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving farmers:', err);
    res.status(500).json({ error: 'Failed to retrieve farmers' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
