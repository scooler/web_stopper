class WS.Time extends Backbone.Model
  defaults:
    started: false
    startMs: 0
    secondsPassed: 0

  start: ->
    return if @get("started")
    @set({
      started: true
      startMs: new Date().getTime()
      },
      {silence: true}
    )

    @handle = setTimeout(@tickTock, 1000)

  stop: ->
    @set({started: false},{silence: true})
    clearTimeout(@handle)

  #TODO - refactor, but it's getting late (Time is running out XD)
  tickTock: =>
    #caching to minimaza access time, and time before new Date and setTimeouta
    return unless @get("started")
    startMs = @get("startMs")
    secondsPassed = @get("secondsPassed")
    msPassed = secondsPassed * 1000
    nowMs = new Date().getTime()
    wholeTimePassed = nowMs - startMs
    timeJustPassed = wholeTimePassed - msPassed
    setTimeout(@tickTock, 2000 - timeJustPassed)
    @set(secondsPassed: secondsPassed+1)

  seconds: ->
    @get("secondsPassed")%60

  minutes: ->
    Math.floor((@get("secondsPassed")%3600)/60)

  hours: ->
    Math.floor(@get("secondsPassed")/3600)
