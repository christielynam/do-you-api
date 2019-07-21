export const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production')  {
    return ''
  } else {
    return 'http://localhost:3001'
  }
}