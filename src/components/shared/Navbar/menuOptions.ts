/* eslint-disable import/prefer-default-export */
import {
  HiFire, HiPlay, HiStar, HiCalendar, HiDesktopComputer
} from 'react-icons/hi'

export const getMovieMenuOptions = (type: 'movie' | 'tv' = 'movie') => [
  {
    name: 'Popular',
    description: 'Keep a tab on the mega-hits of the season',
    href: '',
    icon: HiFire
  },
  {
    name: type === 'movie' ? 'Now Playing' : 'Airing Today',
    description: `Delve into ${type === 'movie' ? 'movies that are in cinemas now' : 'TV Shows that are airing now'}`,
    href: '',
    icon: HiPlay
  },
  {
    name: type === 'movie' ? 'Upcoming' : 'On TV',
    description: type === 'movie' ? 'Got a calendar? We\'ve got the content. Don\'t miss highly anticipated upcoming movies' : 'Get a taste of what everyone is watching this season',
    href: '',
    icon: type === 'movie' ? HiCalendar : HiDesktopComputer
  },
  {
    name: 'Top Rated',
    description: `Follow fan favorite ${type === 'movie' ? 'movies' : 'TV Shows'} of all time`,
    href: '',
    icon: HiStar
  }
]