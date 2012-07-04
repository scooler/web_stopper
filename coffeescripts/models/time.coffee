class WS.Time extends Backbone.Model
  defaults:
    started: false
    startMs: 0
    secondsPassed: 0
    secondsPassedEarlier: 0

  start: ->
    return if @get("started")
    @set({
      started: true
      startMs: new Date().getTime()
      secondsPassedEarlier: @get("secondsPassed") + @get("secondsPassedEarlier")
      secondsPassed: 0
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
    @allSeconds()%60

  minutes: ->
    Math.floor((@allSeconds()%3600)/60)

  hours: ->
    Math.floor(@allSeconds()/3600)

  allSeconds: ->
    @get("secondsPassed")+@get("secondsPassedEarlier")
