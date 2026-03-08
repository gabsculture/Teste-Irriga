/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'pivots.index': {
    methods: ["GET","HEAD"],
    pattern: '/pivots',
    tokens: [{"old":"/pivots","type":0,"val":"pivots","end":""}],
    types: placeholder as Registry['pivots.index']['types'],
  },
  'pivots.store': {
    methods: ["POST"],
    pattern: '/pivots',
    tokens: [{"old":"/pivots","type":0,"val":"pivots","end":""}],
    types: placeholder as Registry['pivots.store']['types'],
  },
  'pivots.show': {
    methods: ["GET","HEAD"],
    pattern: '/pivots/:id',
    tokens: [{"old":"/pivots/:id","type":0,"val":"pivots","end":""},{"old":"/pivots/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['pivots.show']['types'],
  },
  'pivots.update': {
    methods: ["PUT","PATCH"],
    pattern: '/pivots/:id',
    tokens: [{"old":"/pivots/:id","type":0,"val":"pivots","end":""},{"old":"/pivots/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['pivots.update']['types'],
  },
  'pivots.destroy': {
    methods: ["DELETE"],
    pattern: '/pivots/:id',
    tokens: [{"old":"/pivots/:id","type":0,"val":"pivots","end":""},{"old":"/pivots/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['pivots.destroy']['types'],
  },
  'irrigations.index': {
    methods: ["GET","HEAD"],
    pattern: '/irrigations',
    tokens: [{"old":"/irrigations","type":0,"val":"irrigations","end":""}],
    types: placeholder as Registry['irrigations.index']['types'],
  },
  'irrigations.store': {
    methods: ["POST"],
    pattern: '/irrigations',
    tokens: [{"old":"/irrigations","type":0,"val":"irrigations","end":""}],
    types: placeholder as Registry['irrigations.store']['types'],
  },
  'irrigations.show': {
    methods: ["GET","HEAD"],
    pattern: '/irrigations/:id',
    tokens: [{"old":"/irrigations/:id","type":0,"val":"irrigations","end":""},{"old":"/irrigations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['irrigations.show']['types'],
  },
  'irrigations.update': {
    methods: ["PUT","PATCH"],
    pattern: '/irrigations/:id',
    tokens: [{"old":"/irrigations/:id","type":0,"val":"irrigations","end":""},{"old":"/irrigations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['irrigations.update']['types'],
  },
  'irrigations.destroy': {
    methods: ["DELETE"],
    pattern: '/irrigations/:id',
    tokens: [{"old":"/irrigations/:id","type":0,"val":"irrigations","end":""},{"old":"/irrigations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['irrigations.destroy']['types'],
  },
  'irrigations.transfer': {
    methods: ["POST"],
    pattern: '/irrigations/transferIrrigations',
    tokens: [{"old":"/irrigations/transferIrrigations","type":0,"val":"irrigations","end":""},{"old":"/irrigations/transferIrrigations","type":0,"val":"transferIrrigations","end":""}],
    types: placeholder as Registry['irrigations.transfer']['types'],
  },
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/register',
    tokens: [{"old":"/api/v1/auth/register","type":0,"val":"api","end":""},{"old":"/api/v1/auth/register","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/register","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_token.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_token.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
