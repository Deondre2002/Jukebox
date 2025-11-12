import db from "#./client.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  console.log("database music!");

  await db.query("DELETE FROM playlist_tracks;");
  await db.query("DELETE FROM playlist;");
  await db.query("DELETE FROM tracks;");
  await db.query("DELETE FROM users");

  const users = [
    ["Mcqueen", "hashed_password_1"],
    ["Chick hicks", "hashed_password_2"],
    ["The king", "hashed_password_3"],
  ];

  for (const [username, password_hash] of users) {
    await db.query(
      "INSERT INTO users (username, password_hash) VALUES ($1, $2);",
      [username, password_hash]
    );
  }

  const tracks = [
    ["God’s Plan", 210000],
    ["Hotline Bling", 267000],
    ["In My Feelings", 218000],
    ["Nonstop", 236000],
    ["Money In The Grave", 225000],
    ["Hustlin’", 260000],
    ["Aston Martin Music", 310000],
    ["The Boss", 251000],
    ["Billie Jean", 293000],
    ["Beat It", 258000],
    ["Smooth Criminal", 257000],
    ["Thriller", 357000],
    ["Halo", 261000],
    ["Single Ladies", 195000],
    ["Crazy In Love", 235000],
    ["Run It!", 210000],
    ["No Guidance", 261000],
    ["Under The Influence", 203000],
    ["Forever", 337000],
    ["Take Care", 265000],
  ];

  for (const [name, duration_ms] of tracks) {
    await db.query("INSERT INTO tracks (name, duration_ms) VALUES ($1, $2);", [
      name,
      duration_ms,
    ]);
  }

  const playlists = [
    ["Drake Essentials", "Best of Drake"],
    ["Rick Ross Vibes", "Boss music and luxury rap"],
    ["Michael Jackson Hits", "Timeless MJ classics"],
    ["Beyoncé Energy", "Powerful pop & R&B anthems"],
    ["Chris Brown Mix", "Dance, R&B, and smooth tracks"],
    ["Workout Motivation", "High-energy hip-hop & pop"],
    ["Chill & Focus", "Smooth tunes for concentration"],
    ["Throwback 2000s", "Hits from the early 2000s"],
    ["Party Mode", "Club-ready bangers"],
    ["Love Songs", "Romantic slow jams"],
  ];

  for (const [name, description] of playlists) {
    await db.query(
      "INSERT INTO playlist (name, description) VALUES ($1, $2);",
      [name, description]
    );
  }

  const combos = [
    [1, 1],
    [1, 2],
    [2, 6],
    [2, 7],
    [3, 9],
    [3, 10],
    [3, 11],
    [4, 12],
    [4, 13],
    [5, 15],
    [5, 16],
    [5, 17],
    [6, 4],
    [7, 20],
    [9, 8],
  ];

  for (const [playlist_id, track_id] of combos) {
    await db.query(
      "INSERT INTO playlist_tracks (playlist_id, track_id) VALUES ($1, $2);",
      [playlist_id, track_id]
    );
  }

  console.log("✅ Database seeded successfully!");
}

await seed();
await db.end();
