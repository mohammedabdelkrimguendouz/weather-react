import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { getWeather } from '../../services/weatherService'

export const featchWeather = createAsyncThunk(
  'weatherApi/fetchWeather',
  async ({ lang, lat, lon }) => {
    const controller = new AbortController()
    const signal = controller.signal

    const data = await getWeather(signal, lang, lat, lon)

    return {
      description: data.weather[0].description,
      name: data.name,
      temp: Math.round(data.main.temp),
      temp_max: Math.round(data.main.temp_max),
      temp_min: Math.round(data.main.temp_min),
      iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      dateAndTime: moment().format('L'),
    }
  }
)

const initialState = {
  weather: {},
  isLoading: false,
}

export const weatherApiSlice = createSlice({
  name: 'weatherApi',
  initialState,
  reducers: {
    // change: (currentState) => {
    //   currentState.result = 'koko'
    // },
  },

  extraReducers(builder) {
    builder
      .addCase(featchWeather.pending, (state) => {
        state.isLoading = true
      })
      .addCase(featchWeather.fulfilled, (state, action) => {
        state.isLoading = false
        state.weather = action.payload
      })
      .addCase(featchWeather.rejected, (state) => {
        state.isLoading = false
      })
  },
})

// Action creators are generated for each case reducer function
//export const { change } = weatherApiSlice.actions

export default weatherApiSlice.reducer
