import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

// Response interceptor for centralized error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.detail || error.message || 'API Error'
    return Promise.reject(new Error(message))
  }
)

export const experienceService = {
  getAll: () => apiClient.get('/experiences/'),
}

export const projectService = {
  getAll: () => apiClient.get('/projects/'),
}

export const skillService = {
  getAll: () => apiClient.get('/skills/'),
}

export const educationService = {
  getAll: () => apiClient.get('/educations/'),
}

export default apiClient
