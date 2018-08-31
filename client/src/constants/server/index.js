const isProdEnv = process.env === 'production'
export const SERVICES_URL = (isProdEnv ? '/api/' : 'http://localhost:8080/api/')

