DROP TABLE IF EXISTS playlist_tracks;
DROP TABLE IF EXISTS playlist;
DROP TABLE IF EXISTS tracks;

CREATE TABLE tracks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    duration_ms INTEGER
);

CREATE TABLE playlist (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    description TEXT NOT NULL
);
CREATE TABLE playlist_tracks (
    id SERIAL PRIMARY KEY,
    playlist_id INTEGER NOT NULL REFERENCES playlist(id) ON DELETE CASCADE,
    track_id INTEGER NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
    UNIQUE (playlist_id, track_id)
);
