class WS.StopperView extends Backbone.View
  #nothing dynamic for now so why bother :)
  template: ->
    $("#stopper_template").html()

  events:
    "click .start": "start"
    "click .stop": "stop"

  initialize: ->
    @model = new WS.Time
    @model.on "change", @updateClock, this

  render: ->
    $(@el).append @template()
    @

  start: (e) ->
    e.preventDefault()
    @model.start()

  stop: (e) ->
    e.preventDefault()
    @model.stop()

  updateClock: ->
    @updateSeconds()
    @updateMinutes()
    @updateHours()

  updateSeconds: ->
    @$(".seconds").html @zeroFill @model.seconds()

  updateMinutes: ->
    @$(".minutes").html @zeroFill @model.minutes()

  updateHours: ->
    @$(".hours").html @zeroFill @model.hours()

  zeroFill: (nr) ->
    if nr < 10
      "0#{nr}" 
    else
      "#{nr}"
    
      
