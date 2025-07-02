# 🌤️ Algeria Weather App

A simple and multilingual weather application built with React and Redux Toolkit, showing real-time weather data for all 58 Algerian Wilayas using the OpenWeatherMap API.

---

## 📌 Features

- 🌍 Support for Arabic and English (RTL & LTR).
- 🏙️ Select any Wilaya (province) from Algeria to see its current weather.
- 🌦️ Shows temperature, weather description, and min/max values.
- 📦 Fetches live data from OpenWeatherMap.
- 🎯 Displays weather icon and loading spinner.

---

## ⚙️ Technologies Used

- **React**
- **Redux Toolkit**
- **Material UI (MUI)**
- **i18next** (multi-language support)
- **Moment.js** (date formatting)
- **Axios** (API requests)
- **OpenWeatherMap API**

---

## 🧠 React Hooks Used

| Hook              | Purpose                                      |
|-------------------|----------------------------------------------|
| `useState`        | Manage component state (language, Wilaya)    |
| `useEffect`       | Trigger data fetching on changes             |
| `useDispatch`     | Dispatch Redux actions                       |
| `useSelector`     | Access Redux store state                     |
| `useContext`      | Access Wilaya list via context               |
| `useTranslation`  | Switch and apply translations                |

---

## 🌍 Languages Supported

- 🇩🇿 Arabic (RTL layout)
- 🇺🇸 English (LTR layout)

Change language with a single button click.

---

## 🗺️ Wilaya Data

The app uses a local context (`WilayasContext`) to provide a list of all 58 Wilayas in Algeria with their corresponding latitude and longitude for API requests.

---

## 🔗 API

- Weather data is retrieved from **[OpenWeatherMap](https://openweathermap.org/)** using:
