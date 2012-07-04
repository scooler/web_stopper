class WS.MainRouter extends Backbone.Router
  routes:
    "" : "index"
    "/web_stopper" : "index"

  index: ->
    @view = new WS.StopperView()
    $("#main").html(@view.render().el)
