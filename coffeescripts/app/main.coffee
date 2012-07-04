window.WS = {}
class WS.App
  constructor: ->
    @setupRouters()

  routers: {}

  setupRouters: ->
    @addRouter new WS.MainRouter()

  addRouter: (name, router) ->
    @routers[name] = router

  start: ->
    #    (new Backbone.History).start()

    Backbone.history.start()

$ ->
  window.app = new WS.App
  app.start()
