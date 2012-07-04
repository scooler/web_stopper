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
    @title = $("title").html()

  render: ->
    $(@el).append @template()
    @

  start: (e) ->
    e.preventDefault()
    @model.start()
    @setTitle("[+]#{@title}")
    

  stop: (e) ->
    e.preventDefault()
    @model.stop()
    @setTitle(@title)

  setTitle: (title) ->
    $("title").html(title)

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
    
      
