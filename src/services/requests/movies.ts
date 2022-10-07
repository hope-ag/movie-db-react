import { MovieListResponse, SingleMovieResponse } from '@/types/movies';
import { genericDeleteRequest, genericGetRequest, genericPostRequest } from '../genericRequest';
import type { MovieSearchType } from '~/types/movies';
//

type MovieCategory = 'upcoming' | 'top_rated' | 'now_playing' | 'popular'

/**
 * Get movies or tv shows that match a search
 * @param {String} search string to search
 * @param {'MovieSearchType'} type target: movies or TV Shows. Defaults to movies
 * @param query additional request params
 * @returns an array of matching results - movies/tv shows
 */
export async function searchMovies(
  search: string = '',
  type: MovieSearchType = 'movie',
  query: Record<any, any> = {}
) {
  const newQuery = query;
  newQuery.query = search;
  return genericGetRequest(`/search/${type}`, newQuery);
}

/**
 * Get the most newly created movie. This is a live response and will continuously change.
 * @param query additional request params
 * @returns single movie object
 */
export async function getLatestMovie(query: Record<string, any> = {}) {
  return genericGetRequest<SingleMovieResponse>('/movie/latest', query);
}

export async function getMovies(category: MovieCategory = 'popular', query: Record<string, any> = {}) {
  return genericGetRequest<MovieListResponse>(`/movie/${category}`, query);
}

/**
 * Get the primary information about a movie.
 * @param id movie Id
 * @returns general information on the movie
 */
export async function getMovieDetails(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}`);
}

/**
 * Get the cast and crew for a movie.
 * @param id movie Id
 * @returns the cast and crew as an array
 */
export async function getMovieCredits(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/credits`);
}

/**
 * Get the images that belong to a movie.
 * @param id movie Id
 * @returns array of posters and an array of backdrops
 */
export async function getMovieImages(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/images`);
}

/**
 * Get the videos that belong to a movie.
 * @param id movie Id
 * @returns array of videos for the movie
 */
export async function getMovieVideos(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/videos`);
}

/**
 * Get the keywords that have been added to a movie.
 * @param id movie Id
 * @returns array of keywords
 */
export async function getMovieKeywords(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/keywords`);
}

/**
 * Get a list of lists that this movie belongs to.
 * @param id movie Id
 * @returns array of lists
 */
export async function getMovieLists(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/lists`);
}

/**
 * Get a list of recommended movies for a movie.
 * @param id movie Id
 * @returns array of recommendations based on current movie
 */
export async function getRecommendedMovies(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/recommendations`);
}

/**
 * Get a list of similar movies based on keywords and genres.
 * @param id movie Id
 * @returns array of similar movies
 */
export async function getSimilarMovies(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/similar`);
}

/**
 * Get the release date along with the certification for a movie.
 * @param id movie Id
 * @returns array of release dates for premiere, cinema, tv, digital, etc
 */
export async function getReleaseDates(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/release_dates`);
}

/**
 * Get the user reviews for a movie.
 * @param id movie Id
 * @returns array of user reviews with page number, etc
 */
export async function getUserReviews(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/release_dates`);
}

/**
 * Get a list of the availabilities per country by provider.
 * @param id movie Id
 * @returns list of countries and providers
 */
export async function getMovieProviders(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericGetRequest(`/movie/${id}/watch/providers`);
}

/**
 * Rate a movie
 * @param id movie id
 * @param rating an object with a value property ranging between 0.5 and 10
 * @returns an object containing a status code and a status message
 */
export async function saveMovieRating(id: string, rating: { value: number }) {
  if (!id) throw new Error('No ID provided')
  return genericPostRequest(`/movie/${id}/rating`, {}, rating, true);
}

/**
 * Rate a movie
 * @param id movie id
 * @param rating an object with a value property ranging between 0.5 and 10
 * @returns an object containing a status code and a status message
 */
export async function deleteMovieRating(id: string) {
  if (!id) throw new Error('No ID provided')
  return genericDeleteRequest(`/movie/${id}/rating`, {}, true);
}
