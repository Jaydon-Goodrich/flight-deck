const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://flight-deck-avionics-f0qqnx33s-jaydon-goodrich.vercel.app'
'