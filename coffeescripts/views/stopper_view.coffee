class WS.StopperView extends Backbone.View
  #nothing dynamic for now so why bother :)
  template: ->
    $("#stopper_template").html()

  render: ->
    $(@el).append(@template())
    @
