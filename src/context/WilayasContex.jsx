import { createContext, useContext } from 'react'

const wilayas = [
  { id: 1, name: 'adrar', latitude: 27.8767, longitude: -0.2833 },
  { id: 2, name: 'chlef', latitude: 36.1659, longitude: 1.3345 },
  { id: 3, name: 'laghouat', latitude: 33.8078, longitude: 2.8651 },
  { id: 4, name: 'oum_el_bouaghi', latitude: 35.8783, longitude: 7.1135 },
  { id: 5, name: 'batna', latitude: 35.5559, longitude: 6.1741 },
  { id: 6, name: 'bejaia', latitude: 36.7509, longitude: 5.0567 },
  { id: 7, name: 'biskra', latitude: 34.8504, longitude: 5.7281 },
  { id: 8, name: 'bechar', latitude: 31.6238, longitude: -2.2164 },
  { id: 9, name: 'blida', latitude: 36.4736, longitude: 2.8147 },
  { id: 10, name: 'bouira', latitude: 36.3789, longitude: 3.8934 },
  { id: 11, name: 'tamanrasset', latitude: 22.785, longitude: 5.5228 },
  { id: 12, name: 'tebessa', latitude: 35.4078, longitude: 8.1219 },
  { id: 13, name: 'tlemcen', latitude: 34.8828, longitude: -1.3167 },
  { id: 14, name: 'tiaret', latitude: 35.3786, longitude: 1.3158 },
  { id: 15, name: 'tizi_ouzou', latitude: 36.7167, longitude: 4.05 },
  { id: 16, name: 'algiers', latitude: 36.7538, longitude: 3.0588 },
  { id: 17, name: 'djelfa', latitude: 34.6729, longitude: 3.263 },
  { id: 18, name: 'jijel', latitude: 36.8219, longitude: 5.7667 },
  { id: 19, name: 'setif', latitude: 36.1912, longitude: 5.4137 },
  { id: 20, name: 'saida', latitude: 34.8415, longitude: 0.1458 },
  { id: 21, name: 'skikda', latitude: 36.8763, longitude: 6.9097 },
  { id: 22, name: 'sidi_bel_abbes', latitude: 35.1999, longitude: -0.6352 },
  { id: 23, name: 'annaba', latitude: 36.9077, longitude: 7.7671 },
  { id: 24, name: 'guelma', latitude: 36.4629, longitude: 7.4267 },
  { id: 25, name: 'constantine', latitude: 36.365, longitude: 6.6147 },
  { id: 26, name: 'medea', latitude: 36.2669, longitude: 2.7486 },
  { id: 27, name: 'mostaganem', latitude: 35.9333, longitude: 0.0833 },
  { id: 28, name: 'msila', latitude: 35.7056, longitude: 4.5419 },
  { id: 29, name: 'mascara', latitude: 35.4022, longitude: 0.1408 },
  { id: 30, name: 'ouargla', latitude: 31.9632, longitude: 5.3428 },
  { id: 31, name: 'oran', latitude: 35.6971, longitude: -0.6337 },
  { id: 32, name: 'el_bayadh', latitude: 33.6846, longitude: 1.0119 },
  { id: 33, name: 'illizi', latitude: 26.5091, longitude: 8.4842 },
  { id: 34, name: 'bordj_bou_arreridj', latitude: 36.0736, longitude: 4.7611 },
  { id: 35, name: 'boumerdes', latitude: 36.7664, longitude: 3.4772 },
  { id: 36, name: 'el_tarf', latitude: 36.7675, longitude: 8.3139 },
  { id: 37, name: 'tindouf', latitude: 27.6742, longitude: -8.1478 },
  { id: 38, name: 'tissemsilt', latitude: 35.6078, longitude: 1.8106 },
  { id: 39, name: 'el_oued', latitude: 33.3683, longitude: 6.8674 },
  { id: 40, name: 'khenchela', latitude: 35.4269, longitude: 7.1469 },
  { id: 41, name: 'souk_ahras', latitude: 36.2839, longitude: 7.9556 },
  { id: 42, name: 'tipaza', latitude: 36.5897, longitude: 2.4475 },
  { id: 43, name: 'mila', latitude: 36.4506, longitude: 6.2644 },
  { id: 44, name: 'ain_defla', latitude: 36.2639, longitude: 1.9678 },
  { id: 45, name: 'naama', latitude: 33.2667, longitude: -0.3167 },
  { id: 46, name: 'ain_temouchent', latitude: 35.3028, longitude: -1.1408 },
  { id: 47, name: 'ghardaia', latitude: 32.49, longitude: 3.6736 },
  { id: 48, name: 'relizane', latitude: 35.75, longitude: 0.5833 },
  { id: 49, name: 'timimoun', latitude: 29.25, longitude: 0.25 },
  { id: 50, name: 'bordj_badji_mokhtar', latitude: 21.3167, longitude: 1.0167 },
  { id: 51, name: 'ouled_djellal', latitude: 34.4167, longitude: 5.5 },
  { id: 52, name: 'beni_abbes', latitude: 30.1333, longitude: -2.1667 },
  { id: 53, name: 'in_salah', latitude: 22.79, longitude: 5.52 },
  { id: 54, name: 'in_guezzam', latitude: 19.5667, longitude: 5.75 },
  { id: 55, name: 'touggourt', latitude: 33.1167, longitude: 6.0833 },
  { id: 56, name: 'djanet', latitude: 24.55, longitude: 9.4833 },
  { id: 57, name: 'el_mghair', latitude: 33.95, longitude: 5.9167 },
  { id: 58, name: 'el_menia', latitude: 30.5833, longitude: 2.8833 },
]

const WilayasContext = createContext([])

export const WilayasProvider = ({ children }) => {
  return (
    <WilayasContext.Provider value={wilayas}>
      {children}
    </WilayasContext.Provider>
  )
}

export const useWialays = () => {
  return useContext(WilayasContext)
}
