const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000';

export default API_URL;