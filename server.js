import express from "express";
import db from "./db/client.js";

const app = express();
const PORT = 3000;

app.use(express.json()) 

/
await db.connect();



app.get("/tracks", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM tracks;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch tracks" });
  }
});


app.get("/tracks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query("SELECT * FROM tracks WHERE id = $1;", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Track not found" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch track" });
  }
});


app.get("/playlists", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM playlist;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
});


app.get("/playlists/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const playlistRes = await db.query("SELECT * FROM playlist WHER*
