import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "49e8f79e76486fcbad0ded38ad78cfa2";
const BASE_URL = "https://api.themoviedb.org/3";
const tmdb = axios.create({
  baseURL: BASE_URL,
});


export const fetchNetflixOriginals = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const fetchTrending = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`;
export const fetchTopRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
export const fetchActionMovies =` ${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const fetchComedyMovies =` ${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const fetchHorrorMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const fetchRomanceMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const fetchDocumentaries = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`;

export default tmdb;


