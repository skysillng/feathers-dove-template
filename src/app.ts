// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import { feathers } from '@feathersjs/feathers'

import * as dotenv from 'dotenv'
dotenv.config()

import configuration from '@feathersjs/configuration'
import { koa, rest, bodyParser, errorHandler, parseAuthentication, cors, serveStatic } from '@feathersjs/koa'
import socketio from '@feathersjs/socketio'

import { configurationValidator } from './configuration'
import type { Application, HookContext } from './declarations'
import { logError } from './hooks/log-error'
import { sqlite } from './sqlite'
import { authentication } from './authentication'
import { mysql } from './mysql'
import { services } from './services/index'
import { channels } from './channels'

import { feathersCasl } from 'feathers-casl'
import { authorizeHook } from './authorization'
import { iff } from 'feathers-hooks-common'
import { authenticate } from '@feathersjs/authentication'
import { allowAnonymous } from './hooks/allow-anonymous'
import { cronSchedules } from './cron-schedules'

const app: Application = koa(feathers())

// Load our app configuration (see config/ folder)
app.configure(configuration(configurationValidator))

// Set up Koa middleware
app.use(cors())
app.use(serveStatic(app.get('public')))
app.use(errorHandler())
app.use(parseAuthentication())
app.use(bodyParser())

// Configure services and transports
app.configure(rest())
app.configure(
  socketio({
    cors: {
      origin: app.get('origins')
    }
  })
)
app.configure(sqlite)
// app.configure(mysql)
app.configure(authentication)
// Provide an app wide CASL authorization
app.configure(feathersCasl())
app.configure(services)
app.configure(channels)
// Configure Node-Cron for cron jobs
app.configure(cronSchedules)

// Register hooks that run on all service methods
app.hooks({
  around: {
    all: [logError]
  },
  before: {
    all: [
      iff(
        (context: HookContext) => context.params.provider && !context.path.includes('authentication'),
        allowAnonymous,
        authenticate('jwt', 'anonymous'),
        authorizeHook
      )
    ]
  },
  after: {
    all: [
      iff(
        (context: HookContext) => context.params.provider && !context.path.includes('authentication'),
        authorizeHook
      )
    ]
  },
  error: {}
})
// Register application setup and teardown hooks here
app.hooks({
  setup: [],
  teardown: []
})

export { app }
