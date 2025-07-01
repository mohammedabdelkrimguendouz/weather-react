import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import Weather from './components/Weather'

const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Weather />
    </ThemeProvider>
  )
}

export default App
