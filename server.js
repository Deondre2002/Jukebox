import app from "#app";
import db from "#db/client";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.listen(PORT, () => {
  console.log(`🚀 Listening on port ${PORT}...`);
});
