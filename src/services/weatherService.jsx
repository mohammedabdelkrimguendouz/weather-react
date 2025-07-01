// src/services/weatherService.js
import axios from 'axios'

const API_KEY = '41eadbf84908e871645e8522e50444d2'
const UNITS = 'metric'
const LAT = '31.9527'
const LON = '5.3335'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const getWeather = async (signal, lang = 'ar', lat, lon) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: UNITS,
        lang: lang,
      },
      signal,
    })
    return response.data
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('api request cancelled')
    } else {
      throw error.response?.data?.message || 'Something went wrong'
    }
  }
}
