//https://localhost:7094/api/SensorRiego/GetLastSensorRiego

import axios from 'axios'

export const riegoApi = axios.create({
    baseURL: 'https://localhost:7094/api/SensorRiego'
})