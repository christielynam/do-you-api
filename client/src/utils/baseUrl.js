require('dotenv').config()

export const getBaseUrl = () => process.env.NODE_ENV === 'production' 
? process.env.DATABASE_URL 
: 'http://localhost:3001';