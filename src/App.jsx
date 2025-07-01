import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import Weather from './components/Weather'
import { WilayasProvider } from './context/WilayasContex'

const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WilayasProvider>
        <Weather />
      </WilayasProvider>
    </ThemeProvider>
  )
}

export default App
