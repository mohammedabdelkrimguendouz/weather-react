import CloudIcon from '@mui/icons-material/Cloud'
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import 'moment/locale/ar'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useWialays } from '../context/WilayasContex'
import { featchWeather } from '../features/weather/weatherApiSlice'

export default function Weather() {
  const { t, i18n } = useTranslation()
  const isLoading = useSelector((state) => state.weather.isLoading)
  const weather = useSelector((state) => state.weather.weather)
  const dispatch = useDispatch()
  const wialays = useWialays()

  const [lang, setLang] = useState('ar')
  const [selectedWilaya, setSelectedWilaya] = useState(wialays[0])

  useEffect(() => {
    i18n.changeLanguage(lang)
    dispatch(
      featchWeather({lang, lat:selectedWilaya.latitude, lon:selectedWilaya.longitude})
    )
  }, [lang, selectedWilaya])

  function handleLaguageClick() {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={wialays}
          autoHighlight
          value={selectedWilaya}
          getOptionLabel={(option) => t(option.name)}
          renderOption={(props, option) => {
            const { key, ...rest } = props
            return (
              <Box key={key} component="li" {...rest}>
                {t(option.name)}
              </Box>
            )
          }}
          onChange={(event, newValue) => {
            if (newValue) setSelectedWilaya(newValue)
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t('choose_a_country')}
              InputLabelProps={{
                sx: { textAlign: 'center', width: '100%' },
              }}
              inputProps={{
                ...params.inputProps,
                style: { textAlign: 'center' },
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </Box>

      <Card
        sx={{
          minWidth: 500,
          background: '#0d47a1',
          color: 'white',
          borderRadius: 3,
          boxShadow: 5,
          direction: i18n.language == 'ar' ? 'rtl' : 'ltr',
          padding: '10px',
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: '600' }}>
              {weather?.name}
            </Typography>
            <Typography variant="h6">{weather?.dateAndTime}</Typography>
          </Box>

          <Divider sx={{ backgroundColor: 'white', mb: 2 }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <div>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {isLoading ? <CircularProgress color="white" /> : ''}

                <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
                  {weather?.temp}
                </Typography>
                {weather?.iconUrl && (
                  <img src={weather.iconUrl} alt="weather icon" />
                )}
              </Box>

              <Typography sx={{ fontSize: 20, mb: 1 }}>
                {weather?.description}
              </Typography>

              <Typography sx={{ fontSize: 18 }}>
                {t('min')} :{weather?.temp_min} | {t('max')} :
                {weather?.temp_max}
              </Typography>
            </div>
            <CloudIcon sx={{ fontSize: 140 }} />
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLaguageClick}
        >
          {t(i18n.language == 'ar' ? 'english' : 'arabic')}
        </Button>
      </Box>
    </Container>
  )
}
