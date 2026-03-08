import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'pivots.index': { paramsTuple?: []; params?: {} }
    'pivots.store': { paramsTuple?: []; params?: {} }
    'pivots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pivots.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pivots.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.index': { paramsTuple?: []; params?: {} }
    'irrigations.store': { paramsTuple?: []; params?: {} }
    'irrigations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.transfer': { paramsTuple?: []; params?: {} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'pivots.index': { paramsTuple?: []; params?: {} }
    'pivots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.index': { paramsTuple?: []; params?: {} }
    'irrigations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'pivots.index': { paramsTuple?: []; params?: {} }
    'pivots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.index': { paramsTuple?: []; params?: {} }
    'irrigations.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'pivots.store': { paramsTuple?: []; params?: {} }
    'irrigations.store': { paramsTuple?: []; params?: {} }
    'irrigations.transfer': { paramsTuple?: []; params?: {} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'pivots.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'pivots.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'pivots.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'irrigations.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}