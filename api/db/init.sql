GRANT ALL PRIVILEGES ON DATABASE movies TO admin;

\c movies;

CREATE TABLE public.movies
(
    id integer NOT NULL,
    release_date date,
    title text,
    overview text,
    popularity text,
    vote_count integer,
    vote_average numeric,
    original_language text,
    genre text,
    poster_url text,
    PRIMARY KEY (id)
)
WITH (autovacuum_enabled = TRUE)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.movies
    OWNER to admin;

COPY public.movies (
    id,
    release_date,
    title,
    overview,
    popularity,
    vote_count,
    vote_average,
    original_language,
    genre,
    poster_url
)
FROM '/docker-entrypoint-initdb.d/movies.csv'
DELIMITER ','
CSV HEADER
ENCODING 'UTF8'
QUOTE '"'
ESCAPE '"';
