import CloudIcon from '@mui/icons-material/Cloud'
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import moment from 'moment'
import 'moment/locale/ar'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getWeather } from '../services/weatherService'

export default function Weather() {
  const { t, i18n } = useTranslation()
  const [weather, setWeather] = useState({
    temp: '',
    description: '',
    temp_min: '',
    temp_max: '',
    name: '',
    iconUrl: '',
    dateAndTime: '',
  })

  const [lang, setLang] = useState('ar')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    i18n.changeLanguage(lang)
    const fetchWeather = async () => {
      const data = await getWeather(signal, i18n.language)

      if (!data) return

      const dateArabic = moment().format('L')

      setWeather({
        description: data.weather[0].description,
        name: data.name,
        temp: Math.round(data.main.temp),
        temp_max: Math.round(data.main.temp_max),
        temp_min: Math.round(data.main.temp_min),
        iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        dateAndTime: dateArabic,
      })
    }
    fetchWeather()

    return () => {
      controller.abort()
    }
  }, [lang])

  function handleLaguageClick() {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
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
