import httpClient from './httpClient'
import type { LocationType } from '@/types'
import { locationsParser } from './weatherApiBridge'

/**
 * https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}
 * Auto-complete is triggered only when there are at least three characters.
 */

export const fetchLocations = async (searchKeyWord: string): Promise<LocationType[]> => {
  const response: any = await httpClient.get('/search', {
    params: { q: searchKeyWord }
  })

  return locationsParser(response)
}

/**
 * Preload the default locations
 * Keep everythong organised in the services
 */

export const fetchDefaultLocations = (): LocationType[] => {
  return [
    {
      id: 2551766,
      country: 'United States of America',
      city: 'Denver 🏔',
      region: 'Colorado'
    },
    {
      id: 287907,
      country: 'Brazil',
      city: 'Rio De Janeiro ⛱',
      region: 'Rio De Janeiro'
    },
    {
      id: 714482,
      country: 'Spain',
      city: 'Madrid 💃',
      region: 'Madrid'
    },
    {
      id: 3125553,
      country: 'Japan',
      city: 'Tokyo 🍣',
      region: 'Tokyo'
    },
    {
      id: 129203,
      country: 'Australia',
      city: 'Canberra 🐨',
      region: 'Australian Capital Territory'
    }
  ]
}
