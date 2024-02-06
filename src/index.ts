import { app } from './app'
import { logger } from './logger'

const port = app.get('port')
const host = app.get('host')

process.on('unhandledRejection', (reason) => logger.error('Unhandled Rejection %O', reason))

app.listen(port).then(() => {
  logger.info(`Feathers app listening on http://${host}:${port}`)
})
;('SHA256:wKnWx6mkUZ/VziZuZ20CQHmy1V9Mm3t+6U9V8PqzvCU asaajay775@gmail.com')
