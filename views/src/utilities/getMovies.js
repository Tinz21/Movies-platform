export function getMovies (data) {
  const response = {
    title: data.title,
    year: data.release_date,
    url: data.poster_url,
    overview: data.overview,
    language: data.original_language,
    calification: data.vote_average,
    popularity: data.popularity
  }
  return response
}
