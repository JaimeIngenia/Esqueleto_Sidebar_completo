//https://localhost:7094/api/SensorHumedad/GetLastSensorHumedad
import axios from 'axios'

export const humedadApi = axios.create({
    baseURL: 'https://localhost:7094/api/SensorHumedad'
})