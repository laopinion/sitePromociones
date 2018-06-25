import app from './app-develoment'
import { PORT } from './config'

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
