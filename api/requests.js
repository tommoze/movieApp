import { API_KEY } from "./constants";

export const fetch = [
  {
    key:1,
    url: `movie/popular?api_key=${API_KEY}&language=en-US&page=`,
    categoryTitle: 'Popular Movies'
  },
  { 
    key:2,
    url: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=`,
    categoryTitle: 'Top rated Movies'
  },
  {
    key: 3,
    url: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=`,
    categoryTitle: 'Upcoming movies'
  },
  
]

export const fethchRecomended= (id) => `movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=`

export const fetchVideo = (id) => `movie/${id}/videos?api_key=${API_KEY}&language=en-US`;