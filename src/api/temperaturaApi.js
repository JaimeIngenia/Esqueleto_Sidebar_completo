import axios from 'axios'

export const temperaturaApi = axios.create({
    baseURL: 'https://localhost:7094/api/SensorTemperatura'
})